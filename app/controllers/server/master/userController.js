const pageOption = () => {
  return {
    title: "Users",
    pageTitle: "Users",
    menu: {
      parent: "master",
      child: "users",
    },
  };
};

exports.index = async (req, res) => {
  res.render("server/pages/master/users", pageOption());
};
