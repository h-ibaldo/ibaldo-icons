"use strict";

const { forwardRef } = require('react');

const CheckboxUncheckedCircle2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.949462885140747" cy="12.000000000480213" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxUncheckedCircle2.displayName = 'CheckboxUncheckedCircle2';

module.exports = CheckboxUncheckedCircle2;
module.exports.CheckboxUncheckedCircle2 = CheckboxUncheckedCircle2;
module.exports.default = CheckboxUncheckedCircle2;
