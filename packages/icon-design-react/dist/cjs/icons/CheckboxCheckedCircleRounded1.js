"use strict";

const { forwardRef } = require('react');

const CheckboxCheckedCircleRounded1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.949462885140747" cy="12.000000000480213" r="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.949462885140747 12.000000000480213 10.949462885140747 14.000000000480213 14.949462885140747 10.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxCheckedCircleRounded1.displayName = 'CheckboxCheckedCircleRounded1';

module.exports = CheckboxCheckedCircleRounded1;
module.exports.CheckboxCheckedCircleRounded1 = CheckboxCheckedCircleRounded1;
module.exports.default = CheckboxCheckedCircleRounded1;
