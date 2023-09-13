const express = require('express');
const app = express();
const contactusroute = require('./contactus');
const path = require('path');
const directory = path.dirname(__filename);

const notfoundpath = path.join(directory, 'notfound.html');

app.use(express.static(directory));
// console.log(contactus)




app.get('/', contactusroute.rootpage);

app.get('/contactus.html', contactusroute.contactuspage);

app.get('/success.html', contactusroute.successpage);

// app.use((req, res,) => {
//   res.status(404).send("Sorry, the page you're looking for doesn't exist.");
// });

app.use(contactusroute.notfoundpage);




app.listen(3000, () => {
  console.log('Server started on port 3000');
});