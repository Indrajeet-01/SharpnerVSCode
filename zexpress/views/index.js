const express = require('express');
const path = require('path');

const app = express();

const directory = path.dirname(__filename);
const cssdirectory = path.join(directory, 'contactus.html');

app.use(express.static(directory));

app.get('/', (req, res) => {
  
  res.redirect('contactus.html')
  
});

app.get('/contactus.html', (req, res)=>{
    res.sendFile(cssdirectory);
    //console.log(cssdirectory)

})

app.get('/success.html', (req, res)=>{
  res.sendFile(directory, 'sucess.html');
  //console.log(cssdirectory)

})





app.listen(3000, () => {
  console.log('Server started on port 3000');
});