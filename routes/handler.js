const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    const str = [{
        "name": "CODER",
        "msg": "This is your first ReactJS Hello, World!",
        "username": "CODER-nodejs"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;
