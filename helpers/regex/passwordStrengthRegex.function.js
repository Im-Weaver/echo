

// simple regex that tests strength of a password
/**
 * 
 * 
 * Password must: 
 * 
 * >= 8 char length
 * 1 uppercase 1 lowercase
 * 1 number
 * 1 symbol
 * 
 * @param {*} inPass 
 * @returns 
 */
const passwordStrengthRegex = (inPass) => {
    if(!inPass)
        return false;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return inPass.match(strongRegex);
}

module.exports = passwordStrengthRegex;