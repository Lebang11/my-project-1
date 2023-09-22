const Router = require('express');
const { default: mongoose } = require('mongoose');
const router = Router();
const Blogs = require('../../database/Schema/Blogs');

router.get('/', async (req, res) => {
    const data = await Blogs.find({})
    res.send(data)
})

router.post('/', async (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const text = req.body.text;


    const newBlog = await Blogs.create({author, title, text})
    .then(user => {
        console.log('done');
        res.status(201);
        res.json(newBlog);
    })
    .catch(err => console.log(err))
})

module.exports = router;