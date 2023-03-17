const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000;

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(todoRoutes)

app.use(express.urlencoded({extended: true}))

async function start(){
     try {
        await mongoose.connect(
            'mongodb+srv://admin:admin@cluster0.z4ekdec.mongodb.net/todo',
            {
                useNewUrlParser: true            
            }
        )
        app.listen((PORT), () => {
            console.log('start server...')
        })
    } catch (e) {
        return console.log(e)
    }
}

start()