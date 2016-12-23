/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Vue Directives
Vue.directive('focus', require('./directives/focus'));

// Vue Filters
Vue.filter('nl2br', require('./filters/nl2br'));

// Vue Mixins
import MixInUser from './mixins/user'
import MixInJQuery from './mixins/jquery'
import MixInTools from './mixins/tools'
Vue.mixin(MixInUser);
Vue.mixin(MixInJQuery);
Vue.mixin(MixInTools);

// Vue Components
Vue.component('autosize-textarea', require('./essentials/autosize-textarea.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('sl-user-list', require('./components/user/UserList.vue'));
Vue.component('sl-user-detail', require('./components/user/UserDetail.vue'));

// Vue Router
import RouterConfig from './router'
const router = new VueRouter(RouterConfig);

const app = new Vue({
    router,
    el: '#app',
    data: {
        msg: "hello",
    },
    computed: {},
    watch: {},
    events: {},
    created(){
        console.log('Bootstrap.');
        this.initLocale();
    },
    mounted(){
        console.log('Ready.');
    },
    methods: {
        initLocale(){
            console.log('Init Locale.');

            var that = this;
            var lang = this.locale;

            Vue.config.lang = lang;
            Vue.locale(lang, window.Someline.locales);

        },
    }
});
