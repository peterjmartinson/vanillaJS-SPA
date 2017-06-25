/* jshint esversion:6, browser:true */

import View from './view';
import { $on } from './util';

class App {
  constructor() {
    this.view = new View();
  };
  init() {
    this.view.render();
  };
}

const app = new App();

// window.addEventListener('load', () => app.init());
$on(window, 'load', () => app.init());
