"use strict";

const { forwardRef } = require('react');

const CheckboxUncheckedSquare2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.949462885140747" y="2.000000000480213" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxUncheckedSquare2.displayName = 'CheckboxUncheckedSquare2';

module.exports = CheckboxUncheckedSquare2;
module.exports.CheckboxUncheckedSquare2 = CheckboxUncheckedSquare2;
module.exports.default = CheckboxUncheckedSquare2;
