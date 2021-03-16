# Inbox Pause Script for Gmail (Free alternative to Adios.ai - Boomerang and Mailman)
Since Adios.ai is not working anymore, I wanted to start an google-script alternative to pause your gmail inbox, to only receive mails based on time you choose.
This inbox pause solution is also a free simple alternative to the pause & tame inbox functions of Boomerang and Mailman. 


Useage: 

 1. Go to https://script.google.com, create a new project, and add the content of inboxpause.gs
 2. Go to the function createTimeDrivenTriggers. Tune the times when you want your emails to be delivered.
 3. Enable the Service 'Gmail Api' on the left Services-pane. See: https://developers.google.com/apps-script/guides/services/advanced#new-editor"
 4. run the inboxPause function. Grant for the asked permissions.
 
 At the given trigger-times, the inboxPause function will run. Emails with the label inboxpause will be returned into your mailbox.

This is my first GitHub-project. Any help (commits etc.) in this git is appreciated!
