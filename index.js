import DI from "simple-js-di";

export default {
    install(Vue, options = {}) {
        let di = new DI();
        Vue.prototype.$di = di;
        Vue.$di = di;
    }
}
