"use strict";

const { forwardRef } = require('react');

const FormDropdownSelect5 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731444101053" y="2.99999999557258" width="20" height="6" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.974731444101053" y1="2.999999995576218" x2="15.974731444101053" y2="8.99999999557258" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.974731444101053,8.99999999557258v11c0,.552284749828686.447715250169495,1,1,1h12c.552284749828686,0,1-.447715250171314,1-1v-11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FormDropdownSelect5.displayName = 'FormDropdownSelect5';

module.exports = FormDropdownSelect5;
module.exports.FormDropdownSelect5 = FormDropdownSelect5;
module.exports.default = FormDropdownSelect5;
