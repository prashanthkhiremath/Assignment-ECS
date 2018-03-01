const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


app.get('/api/data', (req, res) => {
    axios({
        method:'get',
        url:'http://jsonstub.com/QnA/2',
        headers: {'Content-Type':' application/json',
        'JsonStub-User-Key':' a67c3db7-405f-4d0d-9958-265eaa47fad4',
        'JsonStub-Project-Key':'feef8e12-f80b-4886-a567-0ec30a53b730'}
      })
        .then(function(response) {
           res.send(response.data.response_list);
      }).catch(function (error) {
           res.send('error occured');
      });
})

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});