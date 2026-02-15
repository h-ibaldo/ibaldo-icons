"use strict";

const { forwardRef } = require('react');

const ButtonDotted12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999990799552" y="8.000000000448381" width="20" height="8" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999990799552" y1="12.010000000450418" x2="7.999999990799552" y2="12.0000000004502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999990799552" y1="12.010000000450418" x2="11.999999990799552" y2="12.0000000004502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.999999990799552" y1="12.010000000450418" x2="15.999999990799552" y2="12.0000000004502" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ButtonDotted12.displayName = 'ButtonDotted12';

module.exports = ButtonDotted12;
module.exports.ButtonDotted12 = ButtonDotted12;
module.exports.default = ButtonDotted12;
