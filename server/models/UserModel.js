const monogoose = require("mongoose");
const bcrypt = require("bcrypt");

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
userSchema.statics.signup = async (email, password) => {
  const exists = await User.findOne({ email });
  if (exists) {
    throw Error("Email is already exists!");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({ email, password: hash });
  return user;
};

// static login fonction
userSchema.statics.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw Error(" incorret Email ");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error(" incorret password ");
  }
  return user;
};

const User = new monogoose.model("User", userSchema);

module.exports = User;
