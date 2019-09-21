import DI from "simple-js-di";

export default {
    install(Vue, options = {}) {
        let di = new DI();
        Vue.prototype.$di = di;
        Vue.$di = di;

        Vue.mixin({
            beforeCreate: function () {
                const { inject } = this.$options;
                if (typeof inject === 'undefined') {
                    return;
                }

                if (!(inject instanceof Array)) {
                    throw new Error('Inject should be an array');
                }

                for (let service of inject) {
                    this[service] = Vue.$di.resolve(service);
                }
            }
        })
    }
}
