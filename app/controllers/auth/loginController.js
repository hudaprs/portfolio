exports.index = async (req, res) => {
  res.render("auth/login", {
    title: "Login",
  });
};
