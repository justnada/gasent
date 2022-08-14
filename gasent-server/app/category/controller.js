const Category = require("./model");

const index = async (req, res) => {
  try {
    const alertMsg = req.flash("alertMsg");
    const alertStatus = req.flash("alertStatus");

    const alert = { message: alertMsg, status: alertStatus };
    const categories = await Category.find();

    res.render("admin/category/view_category", { categories, alert });
  } catch (err) {
    req.flash("alertMsg", `${err?.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/category");
  }
};

const createView = async (req, res) => {
  try {
    res.render("admin/category/create");
  } catch (err) {
    req.flash("alertMsg", `${err?.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/category");
  }
};

const createAction = async (req, res) => {
  try {
    const { name } = req.body;

    let category = new Category({ name });
    await category.save();

    req.flash("alertMsg", `Category '${name}' created`);
    req.flash("alertStatus", "success");
    res.redirect("/category");
  } catch (err) {
    req.flash("alertMsg", `${err?.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/category");
  }
};

const editView = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });

    res.render("admin/category/edit", { category });
  } catch (err) {
    req.flash("alertMsg", `${err?.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/category");
  }
};

const editAction = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await Category.findOneAndUpdate({ _id: id }, { name })
      .then(() => {
        req.flash("alertMsg", `Category '${name}' updated`);
        req.flash("alertStatus", "success");
      })
      .catch((err) => {
        req.flash("alertMsg", `${err?.message}`);
        req.flash("alertStatus", "danger");
      });

    res.redirect("/category");
  } catch (err) {
    req.flash("alertMsg", `${err?.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/category");
  }
};

const deleteAction = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });
    await Category.deleteOne({ _id: id });

    req.flash("alertMsg", `Category '${category?.name}' deleted`);
    req.flash("alertStatus", "success");
    res.redirect("/category");
  } catch (err) {
    req.flash("alertMsg", `${err?.message}`);
    req.flash("alertStatus", "danger");
    res.redirect("/category");
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
