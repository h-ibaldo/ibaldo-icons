"use strict";

const { forwardRef } = require('react');

const CheckboxUncheckedSquare12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="3.949462885140747" y="4.000000000480213" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxUncheckedSquare12.displayName = 'CheckboxUncheckedSquare12';

module.exports = CheckboxUncheckedSquare12;
module.exports.CheckboxUncheckedSquare12 = CheckboxUncheckedSquare12;
module.exports.default = CheckboxUncheckedSquare12;
