const index = async (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
};
