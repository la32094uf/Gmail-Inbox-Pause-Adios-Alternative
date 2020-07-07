function inboxPause() {  
  var label = GmailApp.getUserLabelByName("inboxpause");  
  if(label == null){
    GmailApp.createLabel('inboxpause');  
  }
  else{
    var threads = label.getThreads();  
   Logger.log(threads);
      GmailApp.moveThreadsToInbox(threads);
    label.removeFromThreads(threads); 
    GmailApp.markThreadsUnread(threads)

  }
  
}


function createTimeDrivenTriggers() {
  
    ScriptApp.newTrigger('inboxpause')
      .timeBased()
      .everyDays(1)
      .atHour(8)
      .create();

    ScriptApp.newTrigger('inboxpause')
      .timeBased()
      .everyDays(1)
      .atHour(16)
      .create();
}
