
//
//Simple regex function that validates an email
const emailRegex = (inEmail) => {
    if(!inEmail)
        return false;
    
    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    return inEmail.match(emailRegex);
}


module.exports = emailRegex;