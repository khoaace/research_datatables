var express = require("express");
var router = express.Router();
var _ = require("lodash");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/getData", function(req, res, next) {
  let data = [
    {
      first_name: "1",
      last_name: "Satou",
      position: "Accountant",
      office: "Tokyo",
      start_date: "28th Nov 08",
      salary: "$162,700"
    },
    {
      first_name: "2",
      last_name: "Ramos",
      position: "Chief Executive Officer (CEO)",
      office: "London",
      start_date: "9th Oct 09",
      salary: "$1,200,000"
    },
    {
      first_name: "3",
      last_name: "Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      start_date: "12th Jan 09",
      salary: "$86,000"
    },
    {
      first_name: "4",
      last_name: "Greer",
      position: "Software Engineer",
      office: "London",
      start_date: "13th Oct 12",
      salary: "$132,000"
    },
    {
      first_name: "5",
      last_name: "Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      start_date: "7th Jun 11",
      salary: "$206,850"
    },
    {
      first_name: "6",
      last_name: "Williamson",
      position: "Integration Specialist",
      office: "New York",
      start_date: "2nd Dec 12",
      salary: "$372,000"
    },
    {
      first_name: "7",
      last_name: "Nash",
      position: "Software Engineer",
      office: "London",
      start_date: "3rd May 11",
      salary: "$163,500"
    },
    {
      first_name: "8",
      last_name: "Vance",
      position: "Pre-Sales Support",
      office: "New York",
      start_date: "12th Dec 11",
      salary: "$106,450"
    },
    {
      first_name: "9",
      last_name: "Stevens",
      position: "Sales Assistant",
      office: "New York",
      start_date: "6th Dec 11",
      salary: "$145,600"
    },
    {
      first_name: "10",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "11",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "12",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "13",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "14",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "15",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "16",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "17",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "18",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "19",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "20",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "21",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    },
    {
      first_name: "22",
      last_name: "Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      start_date: "29th Mar 12",
      salary: "$433,060"
    }
  ];
  console.log("hahaha");
  let start = parseInt(req.query.start) || 0;
  let length = parseInt(req.query.length) || 0;
  console.log(start);
  console.log(length);
  let dataTemp;
  if (start < length) {
    dataTemp = data.slice(start, length);
  } else {
    if (start + length < data.length) {
      console.log(start + length);
      dataTemp = data.slice(start, start + length);
    }
    else
    {
      console.log(data.length);
      dataTemp = data.slice(start, data.length);
    }
  }
  console.log(dataTemp);

  let result = {
    draw: req.query.draw,
    recordsTotal: 22,
    recordsFiltered: 22,
    data: dataTemp
  };
  res.send(result);
});

module.exports = router;
