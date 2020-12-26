const express = require('express');
const path = require('path');

const app = express();

const pulicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('/',function(req, res){
    res.sendFile(path.join(pulicPath, 'index.html'));
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is up and running on port 3000");
})
