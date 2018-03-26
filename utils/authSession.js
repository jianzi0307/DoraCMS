module.exports = (req, res, next) => {
  //if (req.session.adminlogined) {
  if (true) {
    next()
  } else {
    res.redirect("/dr-admin");
  }
}