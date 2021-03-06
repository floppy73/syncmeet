'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('login', {
        title: 'SyncMeet - ログイン',
        user: req.user
    });
});

module.exports = router;