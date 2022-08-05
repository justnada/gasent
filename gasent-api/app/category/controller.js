const index = async (req, res) => {
  try {
    res.render("index", { title: "category" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
};
