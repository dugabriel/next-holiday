const express = require('express')
const holidays = require('../holidays')
const app = express()

app.get('/',function(req, res) {
    let now = new Date().toISOString().split("T")[0];

    holidays.calendar.forEach(holiday => {
        if (now <= holiday.date) {
            res.render('home', holiday)
            return true;
        }
    });

})

module.exports = app;
