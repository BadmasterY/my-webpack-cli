import './test.css';
import Vue from 'vue';
import App from './App';

import iView from 'iview';
import 'iview/dist/styles/iview.css';

const { greeter } = require('./demo');

let btn = document.createElement('button');
btn.innerText = greeter;
document.body.appendChild(btn);

btn.addEventListener('click',function(){
    import('./lazy.js').then(lazy => this.innerText = lazy.default).catch(err => console.error(err));
})

Vue.use(iView);
new Vue({
    template: '<App />',
    components: { App }
});