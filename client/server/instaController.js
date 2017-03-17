const InstaData = require('./instaModel');

const instaController = {
  addData(req, res, next) {
    InstaData.create({
      description: req.body.description,
      url: req.body.url,
    }).then(insta => {
      return next();
    }).catch(error => {
      res.status(500).send(error);
    })
  }
}

module.exports = instaController;