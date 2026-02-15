"use strict";

const { forwardRef } = require('react');

const ButtonLined12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999990797733" y="7.000000000448381" width="20" height="10" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.999999990797733 13.000000000448381 8.999999990797733 11.000000000448381 10.999999990797733 13.000000000448381 12.999999990797733 11.000000000448381 14.999999990797733 13.000000000448381 16.999999990797733 11.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ButtonLined12.displayName = 'ButtonLined12';

module.exports = ButtonLined12;
module.exports.ButtonLined12 = ButtonLined12;
module.exports.default = ButtonLined12;
