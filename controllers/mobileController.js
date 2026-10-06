const Mobile = require("../models/Mobile");

// GET /api/mobiles?search=&brand=
exports.getMobiles = async (req, res, next) => {
  try {
    const { search, brand } = req.query;
    const filter = {};
    if (brand) filter.brand = brand;
    if (search) {
      const rx = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      filter.$or = [{ name: rx }, { brand: rx }, { color: rx }];
    }
    const mobiles = await Mobile.find(filter).sort({ createdAt: -1 });
    res.json(mobiles);
  } catch (err) {
    next(err);
  }
};

// GET /api/mobiles/:id
exports.getMobile = async (req, res, next) => {
  try {
    const mobile = await Mobile.findById(req.params.id);
    if (!mobile) return res.status(404).json({ message: "Mobile not found" });
    res.json(mobile);
  } catch (err) {
    next(err);
  }
};

// POST /api/mobiles
exports.createMobile = async (req, res, next) => {
  try {
    const mobile = await Mobile.create(req.body);
    res.status(201).json(mobile);
  } catch (err) {
    next(err);
  }
};

// PUT /api/mobiles/:id
exports.updateMobile = async (req, res, next) => {
  try {
    const mobile = await Mobile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!mobile) return res.status(404).json({ message: "Mobile not found" });
    res.json(mobile);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/mobiles/:id
exports.deleteMobile = async (req, res, next) => {
  try {
    const mobile = await Mobile.findByIdAndDelete(req.params.id);
    if (!mobile) return res.status(404).json({ message: "Mobile not found" });
    res.json({ message: "Mobile deleted", id: req.params.id });
  } catch (err) {
    next(err);
  }
};
