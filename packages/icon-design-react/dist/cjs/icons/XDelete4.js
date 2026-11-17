"use strict";

const { forwardRef } = require('react');

const XDelete4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="7.999999990970537" y1="16.000000000715772" x2="15.999999990610377" y2="8.00000000107957" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.999999990430297" y1="16.000000000894943" x2="7.999999991150617" y2="8.0000000009004" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

XDelete4.displayName = 'XDelete4';

module.exports = XDelete4;
module.exports.XDelete4 = XDelete4;
module.exports.default = XDelete4;
