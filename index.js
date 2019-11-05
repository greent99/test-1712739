const express = require('express')
const app = express()
const port = 3000
var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')




app.get('/',function(req,res){
  res.render('home');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))