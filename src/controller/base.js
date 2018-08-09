module.exports = class extends think.Controller {
  async __before() {
    const userInfo = await this.session('userInfo');
    if (!think.isEmpty(userInfo)) {
      this.assign('userInfo', userInfo);
      const privId = await this.model('priv').where({ name: this.ctx.url }).getField('id', true);
      if (privId) {
        if (userInfo.priv.some(item => item === privId)) {
          return this.success(null, '你有权限访问本页');
        } else {
          return this.fail(403, '你没有权限访问本页');
        }
      }
    }
  }
};
