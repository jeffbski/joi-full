const Joi = require('joi-full'); // includes extenstions

const schema = Joi.object().keys({
  createDate: Joi.date().format('YYYY-MM-DD'),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  access_token: [Joi.string(), Joi.number()],
  birthyear: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email()
}).with('username', 'birthyear').without('password', 'access_token');

Joi.validate({ createDate: '2001-01-02', username: 'abc', birthyear: 1994 }, schema, function (err, value) {
  console.log('err', err);
  console.log('value', value);
});  // err === null -> valid
