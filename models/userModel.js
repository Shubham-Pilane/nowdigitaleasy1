
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: String,
  phoneNumber: Number,
});

// {
//     "name":"Shubham Pilane",
//     "role": "Developer",
//     "email": "shubham@123",
//     "phoneNumber" : 9822401802
// }

const UserModel = mongoose.model('user', userSchema);

module.exports = {UserModel};
