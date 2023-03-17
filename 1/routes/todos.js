const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: "Главная страница",
        isIndex: true
    })
})
router.get('/create', (req, res) => {
    res.render('create', {
        title: "Добавить дело",
        isCreate: true
    })
})
router.post('/create', async (req, res) => {
    const todo = new todo.lean()({
        title: req.body.title
    })

    await todo.save()
    res.redirect('/')
})

module.exports = router 