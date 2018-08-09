module.exports = class extends think.Model {
  get relation() {
    return {
      role_priv: think.Model.HAS_ONE
    };
  }
};
