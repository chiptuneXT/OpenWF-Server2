// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// set up a mongoose model and pass it using module.exports
var User = mongoose.model('User', new Schema({ 
    userid: Number,
    profileid: Number,
    username: {
		type: String,
		required: true,
		index: {
		    unique: true, dropDups: true
		},
		validate: [
		    { validator: usernameVrExist, msg: 'Nome de usuário já existe.'}
		]
	}, 
    nickname: String,
    password: String, 
    email: String,
    affiliateid: String,
    lang: String
}));

function usernameVrExist(value, done) {
  if (value) {
   	User.findOne({ username: value }, (err, count) => {
      if (err) {
        return done(err);
      }
      done(!count);
    });
  }
}

module.exports = User;