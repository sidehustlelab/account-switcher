


chrome.commands.onCommand.addListener(function (command) {
  if (command === 'update-url') {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      var current_url = tabs[0].url;
      var account_num = 1;

      // Gmail
      const gmail_regex = "https:\/\/mail.google.com\/mail\/u\/[0-9].*";
      if (current_url.match(gmail_regex)) {
        current_url = current_url.replace(RegExp("u\/[0-9]"), "u/" + account_num)
      }
      // Google Doc 
      const doc_regex = "https:\/\/docs.google.com\/document\/u\/[0-9].*";
      if (current_url.match(doc_regex)) {
        current_url = current_url.replace(RegExp("u\/[0-9]"), "u/" + account_num)
      }
      // Google Drive 
      const drive_regex = "https:\/\/drive.google.com\/drive\/u\/[0-9].*";
      if (current_url.match(drive_regex)) {
        current_url = current_url.replace(RegExp("u\/[0-9]"), "u/" + account_num)
      }
      // Google Play Music 
      const play_music_regex = "https:\/\/play.google.com\/music\/listen\\?u\=[0-9].*";
      if (current_url.match(play_music_regex)) {
        current_url = current_url.replace(RegExp("\\?u\=[0-9]"), "?u=" + account_num)
      }
      chrome.tabs.update({ url: current_url });
    });
  }
});