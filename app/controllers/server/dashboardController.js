const pageOption = () => {
  return {
    title: "Dashboard",
    pageTitle: "Dashboard",
    menu: {
      parent: null,
      child: "dashboard",
    },
  };
};

exports.dashboard = async (req, res) => {
  res.render("server/index", pageOption());
};
