chrome.commands.onCommand.addListener(function (command) {
  if (command.match("account-[0-9]") ) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    
      var current_url = tabs[0].url;
      var account_num = command.substring(command.length - 1);
      var update_url_regex = null;
      var update_acc = null;

      // Gmail
      const gmail_regex = "https:\/\/mail.google.com\/mail\/u\/[0-9].*";
      if (current_url.match(gmail_regex)) {
        update_url_regex = RegExp("u\/[0-9]");
        update_acc = "u/" + account_num
      }

      // Google Doc 
      const doc_regex = "https:\/\/docs.google.com\/document\/u\/[0-9].*";
      if (current_url.match(doc_regex)) {
        update_url_regex = RegExp("u\/[0-9]");
        update_acc = "u/" + account_num
      }

      // Google Drive 
      const drive_regex = "https:\/\/drive.google.com\/drive\/u\/[0-9].*";
      if (current_url.match(drive_regex)) {
        update_url_regex = RegExp("u\/[0-9]");
        update_acc = "u/" + account_num
      }

      // Google Play Music 
      const play_music_regex = "https:\/\/play.google.com\/music\/listen\\?u\=[0-9].*";
      if (current_url.match(play_music_regex)) {
        update_url_regex = RegExp("\\?u\=[0-9]");
        update_acc = "?u=" + account_num
      }
      
      // Google Classroom
      const classroom_regex = "https:\/\/classroom.google.com\/u\/[0-9].*";
      if (current_url.match(classroom_regex)) {
        update_url_regex = RegExp("u\/[0-9]");
        update_acc = "u/" + account_num
      }

      // Google Meet
      const meet_regex = "https:\/\/meet.google.com\/.*\?authuser=[0-9].*";
      if (current_url.match(meet_regex)) {
        update_url_regex = RegExp("authuser=[0-9]");
        update_acc = "authuser=" + account_num
      }

      // Google Hangouts
      const hangouts_regex1 = "https:\/\/hangouts.google.com\/.*\?authuser=[0-9].*";
      console.log(current_url, hangouts_regex1)
      if (current_url.match(hangouts_regex1)) {
        update_url_regex = RegExp("authuser=[0-9]");
        update_acc = "authuser=" + account_num
      }

      if (update_acc && update_url_regex) {
        current_url = current_url.replace(update_url_regex, update_acc);
        console.log(current_url)
        chrome.tabs.update({ url: current_url });       
      }
      else {
        console.log("Account switching is not supported on this page.")
      }

    });
  }
});
