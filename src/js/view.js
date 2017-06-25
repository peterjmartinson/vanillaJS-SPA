/* jshint esversion:6, browser:true */

import { controls } from './template';

export default class View {
  constructor() {
    this.el = document.getElementById('target');
  }
  render() {
    this.el.innerHTML = controls();
  }
}