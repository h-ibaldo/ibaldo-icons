"use strict";

const { forwardRef } = require('react');

const CheckMarkSolidGeometric = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="2.949462885140747 12.000000000480213 5.949462885140747 9.000000000480213 9.949462885140747 13.000000000480213 17.949462885140747 5.000000000480213 20.949462885140747 8.000000000480213 9.949462885140747 19.000000000480213 2.949462885140747 12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckMarkSolidGeometric.displayName = 'CheckMarkSolidGeometric';

module.exports = CheckMarkSolidGeometric;
module.exports.CheckMarkSolidGeometric = CheckMarkSolidGeometric;
module.exports.default = CheckMarkSolidGeometric;
