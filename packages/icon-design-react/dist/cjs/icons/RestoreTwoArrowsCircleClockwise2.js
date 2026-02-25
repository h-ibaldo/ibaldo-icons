"use strict";

const { forwardRef } = require('react');

const RestoreTwoArrowsCircleClockwise2 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M2.999999981180736,3.999996564258254l4,.000000000087311-.000000000090949,3.999999999912689" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.999999981180736,19.999996564618414l-4-.000000000451109.00000000044929-3.999999999909051" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.999999981180736,19.482357404102004c2.411437988279431-1.6146240234375,4-4.3624267578125,4-7.48236083984375,0-4.9705810546875-4.029418945310681-9-9-9-.338562011720569,0-.671813964840112.0213623046875-1,.05950927734375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.999999982650479,4.517635723963394c-2.411437988419493,1.614624023222859-4.000000000380169,4.362426757455978-4.000000000671207,7.482360839487228-.000000000438376,4.9705810546875,4.02941894452124,9.00000000036016,8.999999999201464,9.000000000807631.338562011709655.000000000029104.671813964849207-.021362304625654,1-.059509277256439" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999981180736" cy="11.999996564258254" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

RestoreTwoArrowsCircleClockwise2.displayName = 'RestoreTwoArrowsCircleClockwise2';

module.exports = RestoreTwoArrowsCircleClockwise2;
module.exports.RestoreTwoArrowsCircleClockwise2 = RestoreTwoArrowsCircleClockwise2;
module.exports.default = RestoreTwoArrowsCircleClockwise2;
