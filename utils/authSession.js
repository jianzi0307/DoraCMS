module.exports = (req, res, next) => {
  next()
  /* if (req.session.adminlogined) {
     next()
   } else {
     res.redirect("/dr-admin");
   }*/
}