const str = 'Anna';
// const str = 'I did, did I?';

const isPalindrome = (inStr) => {
    //replace character with blank or no space at all.
    //(//)indicate the start and end of the regular expression.
    //\W matches anything that is not an actual character.
    //g The g at the end is a flag and indicates it is a global search
    // inStr = inStr.replace(/\W/g, '');
    //to show us the String once they have been modified
    // console.log(inStr);
    //convert to lowercase
    // inStr = inStr.toLowerCase();
    for (let i=0; i<inStr.length; i+=1) {
        if (inStr[i] !== inStr[inStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(str));