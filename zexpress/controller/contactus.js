const path = require('path');
const directory = path.dirname(__filename);
const contactus = path.join(directory, 'contactus.html');
const notfoundpath = path.join(directory, 'notfound.html');


exports.rootpage = (req, res) => {
    res.redirect('contactus.html')
}

exports.contactuspage=(req, res)=>{
    res.sendFile(contactus);
    //console.log(cssdirectory)

}

exports.successpage =(req, res)=>{
    res.sendFile(directory, 'success.html');
}

exports.notfoundpage = (req, res,) => {
  
    res.sendFile(notfoundpath);
    
  }

