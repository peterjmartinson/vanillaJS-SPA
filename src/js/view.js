/* jshint esversion:6, browser:true */

import { calendar } from './template';

export default class View {
  constructor() {
    this.el = document.getElementById('target');
  }
  render(data) {
    this.el.innerHTML = calendar(data);
  }
}
