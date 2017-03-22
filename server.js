const express = require('express');
const hbs = require ('hbs');
const fs = require ('fs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');  
app.set('view engine', 'hbs');

app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.use((req,res,next) =>{

    var now = new Date().toString();

  var log= `${now}: ${req.method} ${req.url}`;
console.log(log);
fs.appendFile('server.log',log +'\n');
 
//});
next();

});
app.get('/', (req,res) => {
   
    res.render('home.hbs',{
     pageTitle: 'Homepage',
     welcomeMessage: 'Homepage',
      currentYear : new Date().getFullYear()


    });

});
app.get('/about', (req,res)=> {

    res.render('about.hbs',{
      pageTitle: 'about page',
      currentYear : new Date().getFullYear()

    });
});
app.listen(3000, () =>{

console.log("server is up at port 3000");

});