function p(data) {
  console.log(data);
}

function email_validation(email = prompt("Enter your email please!")) {
  var splitedEmailArray = email.split('@');
  var splitedDomain = splitedEmailArray[1].split('.');
  var domainName = splitedDomain[0];
  var domainEnding = splitedDomain[splitedDomain.length - 1];

  if (splitedEmailArray.length != 2) {
    p('Invalid entry!');
    return false;
  }
  else if (Number(splitedEmailArray[0]) == splitedEmailArray[0]) {
    p('Only numbers!');
    return false;
  }
  else if (splitedEmailArray[0].indexOf('$') != -1 || splitedEmailArray[0].indexOf('%') != -1) {
    p('Wrong symbols!');
    return false;
  }
  else if (domainName.length < 5 || domainName.length > 32) {
    p('Domain name invalid!');
    return false;
  }
  else if (   domainEnding != "com"
           && domainEnding != "de"
           && domainEnding != "org") {
    p('We accept emails only with .com .de .org ending - sorry!');
    return false;
  }
  else {
    p("Email accepted");
    return true;
  }
}

email_validation();
