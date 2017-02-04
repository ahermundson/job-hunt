var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/job_hunt';

router.post('/', function(req,res) {
  const newApplication = req.body;
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log("error in new app post");
      res.sendStatus(500);
    }
    client.query('INSERT INTO jobinfo(company_name, date_applied, company_contact_name,' +
    ' company_contact_email, company_contact_number, job_posting, heard_back,' +
    ' got_interview, interview_date, notes, used_recruiter, recruiter_name, posting_url, job_title) ' +
    'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)',
    [newApplication.company_name, newApplication.date_applied, newApplication.company_contact_name, newApplication.company_contact_email, newApplication.company_contact_number, newApplication.job_posting, newApplication.heard_back, newApplication.got_interview, newApplication.interview_date, newApplication.notes, newApplication.used_recruiter, newApplication.recruiter_name, newApplication.posting_url, newApplication.job_title],
    function (err,result) {
      done();
      if(err) {
        console.log("Error in post of app");
        res.sendStatus(500)
      } else {
        console.log("Post complete");
        res.sendStatus(201);
      }
    });
  });
});

router.get('/', function(req, res) {
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log("error in app get");
      res.sendStatus(500);
    }
    client.query('SELECT * FROM jobinfo',
    function (err, result) {
      done();
      if(err) {
        console.log("Error in get");
        res.sendStatus(500);
      } else {
        console.log("get successful");
        res.send(result.rows);
      }
    });
  });
});



module.exports = router;
