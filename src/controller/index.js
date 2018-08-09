const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  async loginAction() {
    const param = this.post();
    const userData = await this.model('user').where(param).find();
    if (think.isEmpty(userData)) {
      return this.fail('用户名或密码错！');
    }
    const sessionData = {
      user: userData.user,
      priv: userData.role.role_priv.priv_id.split(',').map(id => Number(id))
    };
    this.session('userInfo', sessionData);
    this.redirect('/index');
  }
  async logoutAction() {
    await this.session(null);
    this.redirect('/index');
  }
};
