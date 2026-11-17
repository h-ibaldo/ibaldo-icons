"use strict";

const { forwardRef } = require('react');

const LupePin3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="10.999999976489562" cy="10.998779299955459" r="8.999999999998636" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.363952613210131" y1="17.362731936675118" x2="21.999999976489562" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.999999976489562,9.998779299956368c0-1.656854249398748-1.343145750599433-3-3-3s-3,1.343145750601252-3,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.999999976489562,9.998779299956368c0,2.29986572265625,1.197631835941138,4.3160400390625,3,5.471435546875,1.802368164060681-1.1553955078125,3-3.17156982421875,3-5.471435546875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.999999976489562" y1="10.008779299956586" x2="10.999999976489562" y2="9.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupePin3.displayName = 'LupePin3';

module.exports = LupePin3;
module.exports.LupePin3 = LupePin3;
module.exports.default = LupePin3;
