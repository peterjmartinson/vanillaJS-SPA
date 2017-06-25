/* jshint esversion:6, browser:true */

import moment from 'moment';

export default class Model {
  constructor() {
    this.now = moment().day(15);
  }
  setDate(month, year) {
    this.now.month(month).year(year);
  }
}
