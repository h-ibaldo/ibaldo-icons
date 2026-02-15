"use strict";

const { forwardRef } = require('react');

const CheckboxCheckedSquare4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="19.949462885140747 6.000000000480213 11.949462885140747 14.000000000480213 8.949462885140747 11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.949462885140747,5.000000000480213h-7c-1.656854249500611,0-3,1.343145750510303-3,3v8c0,1.656854249489697,1.343145750508484,3,3,3h8c1.656854249489697,0,3-1.343145750510303,3-3v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxCheckedSquare4.displayName = 'CheckboxCheckedSquare4';

module.exports = CheckboxCheckedSquare4;
module.exports.CheckboxCheckedSquare4 = CheckboxCheckedSquare4;
module.exports.default = CheckboxCheckedSquare4;
