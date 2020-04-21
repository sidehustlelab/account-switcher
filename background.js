chrome.commands.onCommand.addListener(function (command) {
  if (command.match("account-[0-9]")) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
      var current_url = tabs[0].url;
      var account_num = command.substring(command.length - 1);
      var possible_regex = ["u/", "u=", "authuser="]

      const google_regex = "https:\/\/.+.google.com.*"
      if (current_url.match(google_regex)) {
        let updated = false
        for (let i = 0; i < possible_regex.length; i++) {
          let curRegex = possible_regex[i]
          if (current_url.search(curRegex + "[0-9]") >= 0) {
            current_url = current_url.replace(RegExp(curRegex + "[0-9]"), curRegex + account_num);
            chrome.tabs.update({ url: current_url });
            updated = true
            break;
          }
        }
        if (!updated) {
          alert("Support for this page is under development.")
        }
      } else {
        alert("Account switching is not supported on this page.")
      }
    });
  }
});
