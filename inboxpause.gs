//Guide:  
// 1. Go to the function createTimeDrivenTriggers. Tune the times when you want your emails to be delivered.
// 2. Change the "YOU@gmail.com" to your own gmail
// 3. Enable the Service 'Gmail Api' on the left Services-pane. See: https://developers.google.com/apps-script/guides/services/advanced#new-editor"
// 4. run the inboxPause function. Grant for the asked permissions.
// 
// At the given trigger-times, the inboxPause function will run. Emails with the label inboxpause will be returned into your mailbox.


function inboxPause() {
  var label = GmailApp.getUserLabelByName("inboxpause");
  if (label == null) {
    if (typeof Gmail === 'undefined') {
      throw new Error("You have to enable the Service 'Gmail Api' on the left Services-pane. See: https://developers.google.com/apps-script/guides/services/advanced#new-editor");
    } else {


      var labelnew = Gmail.newLabel()
      labelnew.labelListVisibility = 'LABEL_HIDE';
      labelnew.name = 'inboxpause'

      Gmail.Users.Labels.create(labelnew, 'me');

      // New Updated Filter:
      createFilter('{(to:YOU@gmail.com) (deliveredto:YOU@gmail.com)}', 'inboxpause'); // TODO: UPDATE EMAIL |  

      createTimeDrivenTriggers();
    }
  }
  else {
    var threads = label.getThreads();
    Logger.log(threads);
    GmailApp.moveThreadsToInbox(threads);
    label.removeFromThreads(threads);
    GmailApp.markThreadsUnread(threads)

  }

}

function createTimeDrivenTriggers() {
  ScriptApp.newTrigger('inboxPause')
    .timeBased()
    .everyDays(1)
    .atHour(8) //at 8 o'clock
    .create();

  ScriptApp.newTrigger('inboxPause')
    .timeBased()
    .everyDays(1)
    .atHour(16) // at 16 o'clock
    .create();
}


function createFilter(query, labelName) {

  //Thanks to JonNRb: https://stackoverflow.com/questions/40773241/create-a-native-filter-in-gmail-using-google-apps-script



  // Lists all the labels for the user running the script, 'me'
  var labels = Gmail.Users.Labels.list('me')

  // Search through the existing labels for ${labelName}
  var label = null
  labels.labels.forEach(function (l) {
    if (l.name === labelName) {
      label = l
    }
  })

  // If the label doesn't exist, return
  if (label === null) return

  // Create a new filter object (really just POD)
  var filter = Gmail.newFilter()

  // Make the filter activate when the query is ${query}
  filter.criteria = Gmail.newFilterCriteria()
  filter.criteria.query = query

  // Make the filter apply the label id of ${labelName}
  filter.action = Gmail.newFilterAction()
  filter.action.addLabelIds = [label.id]
  filter.action.removeLabelIds = ['INBOX', 'UNREAD'];

  // Add the filter to the user's ('me') settings
  Gmail.Users.Settings.Filters.create(filter, 'me');

}

