chrome.runtime.onMessage.addListener(function (command) {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    var current_url = tabs[0].url;
    var account_num = command.substring(command.length - 1);
    var update_url_regex = null;
    var update_acc = null;

    // Gmail
    const gmail_regex = "https://mail.google.com/mail/u/[0-9].*";
    if (current_url.match(gmail_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    // Google Docs
    const doc_regex = "https://docs.google.com/document/u/[0-9].*";
    if (current_url.match(doc_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    // Google Sheets
    const sheets_regex = "https://docs.google.com/spreadsheets/u/[0-9].*";
    if (current_url.match(sheets_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    // Google Slides
    const slides_regex = "https://docs.google.com/presentation/u/[0-9].*";
    if (current_url.match(slides_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    // Google Forms
    const forms_regex = "https://docs.google.com/forms/u/[0-9].*";
    if (current_url.match(forms_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    // Google Drive
    const drive_regex = "https://drive.google.com/drive/u/[0-9].*";
    if (current_url.match(drive_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    // Google Classroom
    const classroom_regex = "https://classroom.google.com/u/[0-9].*";
    if (current_url.match(classroom_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    // Google Meet
    const meet_regex = "https://meet.google.com/.*";
    if (current_url.match(meet_regex)) {
      if (!current_url.match("authuser=[0-9]")) {
        current_url = current_url + "?authuser=0";
      }
      update_url_regex = RegExp("authuser=[0-9]");
      update_acc = "authuser=" + account_num;
    }

    // Google Hangouts
    const hangouts_regex = "https://hangouts.google.com/.*?authuser=[0-9].*";
    console.log(current_url, hangouts_regex);
    if (current_url.match(hangouts_regex)) {
      update_url_regex = RegExp("authuser=[0-9]");
      update_acc = "authuser=" + account_num;
    }

    // Google Accounts
    const accounts_regex = "https://myaccount.google.com/u/[0-9].*";
    console.log(current_url, accounts_regex);
    if (current_url.match(accounts_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    // Google Duo web
    const duo_regex = "https://duo.google.com/u/[0-9].*";
    console.log(current_url, duo_regex);
    if (current_url.match(duo_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    // Google calendar
    const calendar_regex = "https://calendar.google.com/calendar/u/[0-9].*";
    console.log(current_url, calendar_regex);
    if (current_url.match(calendar_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    // Google shopping
    const shopping_regex = "https://www.google.co.in/.*?authuser=[0-9].*";
    console.log(current_url, shopping_regex);
    if (current_url.match(shopping_regex)) {
      update_url_regex = RegExp("authuser=[0-9]");
      update_acc = "authuser=" + account_num;
    }

    // Google translate
    const translate_regex =
      "https://translate.google.co.in/.*?authuser=[0-9].*";
    console.log(current_url, translate_regex);
    if (current_url.match(translate_regex)) {
      update_url_regex = RegExp("authuser=[0-9]");
      update_acc = "authuser=" + account_num;
    }

    // Google Keep
    const keep_regex = "https://keep.google.com/u/[0-9].*";
    console.log(current_url, keep_regex);
    if (current_url.match(keep_regex)) {
      update_url_regex = RegExp("u/[0-9]");
      update_acc = "u/" + account_num;
    }

    if (update_acc && update_url_regex) {
      current_url = current_url.replace(update_url_regex, update_acc);
      console.log(current_url);
      if (command.substring(0, command.length - 1) == "alt") {
        chrome.tabs.update({ url: current_url });
      } else {
        chrome.tabs.create({ url: current_url });
      }
    } else {
      console.log("Account switching is not supported on this page.");
    }
  });
});
