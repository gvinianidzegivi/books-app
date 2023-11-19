const User = require('../../models/user.js');

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).send('User Already Exist. Please Login');
    }

    encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(),
      password: encryptedUserPassword,
    });

    const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY);
    user.token = token;
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid Credentials');
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY
      );
      user.token = token;
      return res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  register,
  login,
};
