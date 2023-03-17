const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')

const app = express();

const path = require('path')

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'))

app.use(bodyparser.urlencoded({extended: true}))

// подключение assets файлов
app.use('/css', express.static('assets/css'));
app.use('/js', express.static('assets/js'));
app.use('/img', express.static('assets/img'));

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, "views/ejs"))

// app.use('/css', express.static('/assets/css'))
// app.use('/img', express.static('/assets/img'))
// app.use('/js', express.static('/assets/js'))
// app.use('/css', express.static('/assets/css'))




app.get('/', (req,res) => {
    res.render('index')
})

app.get('/add-user', (req,res) => {
    res.render('add__user')
})

app.listen(3000, () => {
    console.log('сервер запущен на ' + 3000 + 'порту')
})