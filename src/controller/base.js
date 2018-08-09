module.exports = class extends think.Controller {
  async __before() {
    const userInfo = await this.session('userInfo');
    if (!think.isEmpty(userInfo)) {
      this.assign('userInfo', userInfo);
      const priv = await this.model('priv').select();
      const curPriv = priv.find(item => item.name === this.ctx.url);
      if (curPriv) {
        if (userInfo.priv.some(item => item === curPriv.id)) {
          return this.success(null, '你有权限访问本页');
        } else {
          return this.fail(403, '你没有权限访问本页');
        }
      }
    }
  }
};
