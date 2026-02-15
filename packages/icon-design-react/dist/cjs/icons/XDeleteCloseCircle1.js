"use strict";

const { forwardRef } = require('react');

const XDeleteCloseCircle1 = forwardRef(({
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
  <line x1="15.999999990430297" y1="16.000000000894943" x2="7.999999991150617" y2="8.0000000009004" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999990790457" cy="12.000000000897671" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

XDeleteCloseCircle1.displayName = 'XDeleteCloseCircle1';

module.exports = XDeleteCloseCircle1;
module.exports.XDeleteCloseCircle1 = XDeleteCloseCircle1;
module.exports.default = XDeleteCloseCircle1;
