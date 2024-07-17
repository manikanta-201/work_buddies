const monogoose = require("mongoose");
const bcrypt = require("bcrypt");

// difine the Schema
const userSchema = monogoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

// static  signup function
userSchema.statics.signup = async  (email, password) => {
  const exists = await User.findOne({ email });
  if (exists) {
    throw Error("Email is already exists!");
  }
  const salt = await bcrypt.genSalt(10);  //10 level security is standard added and salt will add aditional hashing to the password
  const hash = await bcrypt.hash(password, salt);
  const user = await User.create({ email, password: hash });
  return user;
};

// static login fonction
userSchema.statics.login = async (email, password) => {
  const user = await User.findOne({ email :email});
  if (!user) {
    throw Error(" Incorret Email ");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error(" Incorret password ");
  }
  return user;
};

// ctreat the model

const User = new monogoose.model("User", userSchema);

module.exports = User;
