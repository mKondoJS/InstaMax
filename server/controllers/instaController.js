const InstaData = require('./../models/instaModel');

const instaController = {
  addData(req, res, next) {
    console.log('in addData', req.body);
    req.body.images.forEach((img) => {
      console.log(img);
      InstaData.create({
        description: img.description,
        url: img.url,
      }).then((insta) => {
        console.log('saved to db', insta);
        return next();
      }).catch((error) => {
        console.log('failed saved to db', error);
        res.status(500).send(error);
      });
    });
  },

  getImages(req, res, next) {
    console.log('in getImages!!');
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
    InstaData.find({description: req.params}, (error, response) => {
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
    console.log('in get possi words', req.body);
    InstaData.distinct('description', { description: { $regex: "^" + req.body.search }}, (error, response) => {
      if (error) res.status(500).send(error);
      res.locals.description = response;
      next();
    });
  },
};

module.exports = instaController;
