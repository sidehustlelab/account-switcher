

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'update-url') {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      let url = tabs[0].url;
      console.log(url)
      console.log("Triggered");
      // URL Matching
      // Gmail
      const gmail_regex = "https:\/\/mail.google.com\/mail\/u\/[0-9].*";
      if(url.match(gmail_regex)){
          console.log("GMAIL URL MATCH");
      }
      // Google Doc 
      const doc_regex = "https:\/\/docs.google.com\/document\/u\/[0-9].*";
      if(url.match(doc_regex)){
        console.log("DOC URL MATCH");
      }
      // Google Drive 
      const drive_regex = "https:\/\/drive.google.com\/drive\/u\/[0-9].*";
      if(url.match(drive_regex)){
        console.log("GOOGLE DRIVE URL MATCH");
      }
      // Google Play Music 
      const play_music_regex = "https:\/\/play.google.com\/music\/listen\?u\=[0-9].*";
      if(url.match(drive_regex)){
        console.log("GOOGLE Play Music URL MATCH");
      }
    
      chrome.tabs.update({ url: "https://www.google.com/" });
    });
  }
  console.log(command);
});