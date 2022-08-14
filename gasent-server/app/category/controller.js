const Category = require("./model");

const index = async (req, res) => {
  try {
    const categories = await Category.find();

    console.log("CATEGORY VIEW");
    console.log(categories);

    res.render("admin/category/view_category", { categories: categories });
  } catch (err) {
    console.log(err);
  }
};

const createView = async (req, res) => {
  try {
    res.render("admin/category/create");
  } catch (err) {
    console.log(err);
  }
};

const createAction = async (req, res) => {
  try {
    const { name } = req.body;

    let category = new Category({ name });
    await category.save();

    res.redirect("/category");
  } catch (err) {
    console.log(err);
  }
};

const editView = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });

    res.render("admin/category/edit", { category });
  } catch (err) {
    console.log(err);
  }
};

const editAction = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findOneAndUpdate({ _id: id }, { name });
    console.log(category);
    res.redirect("/category");
  } catch (err) {
    console.log(err);
  }
};

const deleteAction = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findOneAndDelete({ _id: id });

    console.log("delete controller");

    res.redirect("/category");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
  createView,
  createAction,
  editView,
  editAction,
  deleteAction,
};
