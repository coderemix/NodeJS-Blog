const express = require('express');

const router = express.Router();

router.get('/hello', (req, res) => {
    res.send("Hello world");
});

//use template engine rendering
router.get('', (req, res) => {
    res.render("index");
});

//another page
router.get('/about', (req, res) => {
    res.render("about");
});

//pass data to template
router.get('/info', (req, res) => {
    const locals = {
        title: "NodeJS Blog",
        desc: "Simple Blog"
    }


    res.render("info", {locals});
});


module.exports = router;