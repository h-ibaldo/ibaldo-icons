"use strict";

const { forwardRef } = require('react');

const FormDropdownSelect32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731444090139" y="8.99999999557258" width="20" height="5.999999999996362" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.974731444090139" y1="8.99999999557258" x2="15.974731444090139" y2="14.999999995568942" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FormDropdownSelect32.displayName = 'FormDropdownSelect32';

module.exports = FormDropdownSelect32;
module.exports.FormDropdownSelect32 = FormDropdownSelect32;
module.exports.default = FormDropdownSelect32;
