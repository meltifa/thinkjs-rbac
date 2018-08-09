module.exports = class extends think.Model {
  get relation() {
    return {
      role: think.Model.BELONG_TO
    };
  }
};
