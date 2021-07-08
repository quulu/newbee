import Vue from 'vue'
import {Button, NavBar, Field, Form, Icon}  from 'vant'

[Button, NavBar, Form, Field,Icon].forEach(item => {
  Vue.use(item);
})
