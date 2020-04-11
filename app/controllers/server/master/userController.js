const moment = require("moment");
const User = require("../../../models/master/user");
const userViewDir = "server/pages/master/users";

exports.index = async (req, res) => {
  try {
    const users = await User.find().sort({ name: 1 });
    res.render(userViewDir, {
      users,
      title: "Users",
      pageTitle: "Users",
      menu: {
        parent: "master",
        child: "users",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.create = async (req, res) => {
  res.render(`${userViewDir}/create`, {
    title: "Users",
    pageTitle: "Users",
    menu: {
      parent: "master",
      child: "users",
    },
  });
};

exports.store = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await User.create({
      name,
      email,
      password,
      createdAt: new Date(),
    });

    res.redirect("/server/master/users");
  } catch (err) {
    console.log(err);
  }
};

exports.show = async (req, res) => {
  try {
    const { _id } = req.params;
    let user = await User.findOne({ _id });

    res.render(`${userViewDir}/show`, {
      user,
      moment,
      title: "Users",
      pageTitle: "Users",
      menu: {
        parent: "master",
        child: "users",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.edit = async (req, res) => {
  try {
    const { _id } = req.params;
    let user = await User.findOne({ _id });

    res.render(`${userViewDir}/edit`, {
      user,
      moment,
      title: "Users",
      pageTitle: "Users",
      menu: {
        parent: "master",
        child: "users",
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, email } = req.body;
    await User.updateOne(
      { _id },
      {
        $set: {
          name,
          email,
          updatedAt: new Date(),
        },
      }
    );

    res.redirect(`/server/master/users/${_id}`);
  } catch (err) {
    console.log(er);
  }
};

exports.destroy = async (req, res) => {
  const { _id } = req.body;
  try {
    await User.deleteOne({ _id });
    res.redirect("/server/master/users");
  } catch (err) {
    console.log(err);
  }
};
