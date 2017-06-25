/* jshint esversion:6, browser:true */

const $on = (target, event, handler) => {
  return target.addEventListener(event, handler);
};

export { $on };

