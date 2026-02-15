"use strict";

const { forwardRef } = require('react');

const CheckboxCheckedSquare12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="7.949462885140747 12.000000000480213 10.949462885140747 15.000000000480213 15.949462885140747 9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.949462885140747" y="2.000000000480213" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxCheckedSquare12.displayName = 'CheckboxCheckedSquare12';

module.exports = CheckboxCheckedSquare12;
module.exports.CheckboxCheckedSquare12 = CheckboxCheckedSquare12;
module.exports.default = CheckboxCheckedSquare12;
