const express = require("express")
const { join } = require("path")
const path = require("path")
const app = express()

// configurar el motor de plantillas ejs

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')





app.get("/", (req, res) =>{
    res.render("index")
});

app.get("/facturas", (req, res) =>{
    res.render("facturas")
});

app.get("/registro", (req, res) =>{
    res.render("registro")
});




app.use(express.static(join(__dirname, 'public')))
app.listen(3000)

console.log(`servidor escuchando en el puerto ${3000}`)
