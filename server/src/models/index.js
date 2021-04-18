// include all of your models here using CommonJS requires
const User = require("./User.js")
const Job = require("./Job.js")
const Application = require("./Application.js")
const Resume = require("./Resume.js")
const CoverLetter = require('./CoverLetter.js')
module.exports = { User, Job, Application, Resume, CoverLetter }
