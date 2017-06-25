/* jshint esversion:6, browser:true */

import moment from 'moment';


// process es6 template literals into strings
const html = (literal, ...cooked) => {
  let result = '';
  cooked.forEach((cook, i) => {
    let lit = literal[i];
    if (Array.isArray(cook)) {
      cook = cook.join('');
    }
    result += lit;
    result += cook;
  });
  result += literal[literal.length - 1];
  return result;
};
const answers = [16,64];
const example = html`
The answers to 4*4 and 8*8 are ${answers.map(a => html`
  answer: ${a}
`)}`;

const controls = () => {
  const curr = moment();
  const next = moment().add(1, 'month');
  const prev = moment().subtract(1, 'month');
  return html`
    <div id="controls">
      <a class="item" href="#/${prev.format('MM')}/${prev.format('YYYY')}">Back one month</a>
      <p class="item">${curr.format('MMMM')}, ${curr.format('YYYY')}</p>
      <a class="item" href="#/${next.format('MM')}/${next.format('YYYY')}">Forward one month</a>
    </div>
  `;
};


export {controls};
