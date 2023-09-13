const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const fs = require("fs");

var jsondata;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  
  fs.readFile('message.txt', (err, data) => {
    if (err) {
      console.error(err);
    } else {
     
      jsondata = {
        message:data.toString(),
      };
    
        res.send(`

                        <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>chat app</title>
                </head>
                <body>

                    <h5 id="showmessage">${jsondata.message}</h5>

                    <form method="post" action="/">

                    <input type="text" id="chatmessage" name="message">
                    <button type="submit" id="button">send</button>

                    </form>

                    <script>

                        var buttonid=document.getElementById('button');
                        var showmessageid = document.getElementById('showmessage');
                        buttonid.addEventListener('click',save);

                        //save chatmessages to text file;
                        function save()
                        {
                            
                            // Retrieve the data from localStorage.
                            const key = 'username';
                            const username = localStorage.getItem(key);

                            //test code from here;

                            var chatmessageid = document.getElementById("chatmessage");
                            var chatmessagevalue = chatmessageid.value;

                            //console.log(addelement)
                            var tosend = username+":"+chatmessagevalue;
                            console.log(username+":"+chatmessagevalue);

                            chatmessageid.value = tosend;
                                
                        }

                        
                    </script>

                </body>
                </html>


        `)
    }
    
  });

});



app.get('/login', (req, res) => {
    res.sendFile('C:\\Users\\indra\\Desktop\\sharpnervscode\\zexpress\\chatApp\\login.html');
    
});

//to save message to file;

app.post('/', (req, res)=>{

    const formData = req.body;
    // console.log(formData)

    // // Do something with the form data.
    // console.log(formData.message.toString());
     // Write the data to the file in append mode.
    fs.appendFile("message.txt", formData.message.toString(), (err) => {
        if (err) {
        console.error(err);
        } else {
        console.log("Data appended to file successfully.");
        }
    });
            
                fs.readFile('message.txt', (err, data) => {
                    if (err) {
                    console.error(err);
                    } else {
                    // Send the data to the frontend.
                    //console.log(data.toString())
                
                    jsondata = {
                        message:data.toString(),
                    };
            }

        });

          res.redirect("/");

});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});