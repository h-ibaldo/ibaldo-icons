"use strict";

const { forwardRef } = require('react');

const XDelete1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="1.999999990790457" y1="22.000000000897671" x2="21.999999990790457" y2="2.000000000897671" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999990799552" y1="22.000000001345143" x2="1.999999991699951" y2="2.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

XDelete1.displayName = 'XDelete1';

module.exports = XDelete1;
module.exports.XDelete1 = XDelete1;
module.exports.default = XDelete1;
