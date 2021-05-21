module.exports = {
  checkIfLoggedIn: (req, res, next) => {
    if (req.session.loggedIn) {
      next();
    } else {
      res.sendStatus(401);
    }
  }
}