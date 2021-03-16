# gmail inbox pause adios alternative
Since Adios.ai is nog working anymore I wanted to start an google-script alternative to pause your gmail inbox, to only receive mails based on time you choose.


Useage: 

- Go to https://script.google.com and add the inboxpause.gs

 1. Go to the function createTimeDrivenTriggers. Tune the times when you want your emails to be delivered.
 2. Enable the Service 'Gmail Api' on the left Services-pane. See: https://developers.google.com/apps-script/guides/services/advanced#new-editor"
 3. run the inboxPause function. Grant for the asked permissions.
 
 At the given trigger-times, the inboxPause function will run. Emails with the label inboxpause will be returned into your mailbox.

This is my first GitHub-project. Any help (commits etc.) in this git is appreciated!
