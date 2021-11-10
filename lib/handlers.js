// splash
exports.home = (req, res) => res.render('home')

// help
// options
// about


exports.notFound = (req, res) => res.render('404')
// Express recognizes the error handler by way of its four
// arguments, so we have to disable ESLint's no-unused-vars rule

/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500')
/* eslint-disable no-unused-vars */

