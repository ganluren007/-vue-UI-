/* 
* @Author: anchen
* @Date:   2017-01-09 16:18:30
* @Last Modified by:   anchen
* @Last Modified time: 2017-06-29 16:27:11
*/

import Vue from 'vue';
import Vuex from 'vuex';

import common from './common.js';
import suansuan from './modules/suansuan.js';
import orederPolicy from './modules/orderpolicy.js';
import join_drive from './modules/join_drive.js';
import vuex_lianxi from './modules/vuex_lianxi.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common,
        orederPolicy,
        suansuan,
        join_drive,
        vuex_lianxi
    }
})
