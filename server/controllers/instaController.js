const InstaData = require('./../models/instaModel');

const instaController = {
  addData(req, res, next) {
    req.body.images.forEach((img) => {
      InstaData.insertMany({
        description: img.description,
        url: img.url,
      }).then((insta) => {
        return next();
      }).catch((error) => {
        res.status(500).send(error);
      });
    });
  },

  getImages(req, res, next) {
    InstaData.find({}, (error, response) => {
      if (error) {
        res.status(500).send(error);
      }
      const urls = [];
      response.forEach(img => {
        urls.push('http://schnomozingo.com/img/lotr/' + img.url + '.jpg');
      });
      res.locals.images = urls;
      next();
    });
  },
  getImagesByDescription(req, res, next) {
    InstaData.find({ description: req.params.description }, (error, response) => {
      if (error) res.status(500).send(error);
      const urls = [];
      response.forEach(img => {
        urls.push('http://schnomozingo.com/img/lotr/' + img.url + '.jpg');
      });
      res.locals.images = urls;
      next();
    });
  },
  getPossibleWords(req, res, next) {
    InstaData.distinct('description', { description: { $regex: "^" + req.body.search } }, (error, response) => {
      if (error) res.status(500).send(error);
      res.locals.description = response;
      next();
    });
  },
};

module.exports = instaController;
