let emails =  ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];

var numUniqueEmails = function(emails) {
    newEmails = []; // array for new emails
    emails.forEach(function(e) { // for each email remove everything from any + to @, remove all .'s', then join back together with an @
      newEmails.push(e.split("@")[0].split("+")[0].split(".").join("") + "@" + e.split("@")[1]);
    });

    function uniq(a) { // function that eliminates all email duplicates
      return a.sort().filter(function(item, pos, ary) {
          return !pos || item != ary[pos - 1];
      })
    }

    return uniq(newEmails).length; // eliminate all email duplicates then return array length
};

numUniqueEmails(emails);
