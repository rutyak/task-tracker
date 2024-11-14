const {Task} = require("../../models/Task");

const deleteController = async function (req, res) {
  const id = req.params.id;

  try {
    let deletedtask = await Task.findOneAndDelete({ _id: id });
    res.status(204).json(deletedtask);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = deleteController;