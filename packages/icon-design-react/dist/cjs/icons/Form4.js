"use strict";

const { forwardRef } = require('react');

const Form4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="9.000000005000402" y="2.000000003886271" width="13" height="4" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000005000402" y1="4.000000003886271" x2="6.000000005000402" y2="4.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.000000005000402" y="10.000000003886271" width="13" height="4" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="9.000000005000402" y="18.000000003886271" width="13" height="4" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000005000402" y1="12.000000003886271" x2="6.000000005000402" y2="12.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000005000402" y1="20.000000003886271" x2="6.000000005000402" y2="20.000000003886271" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Form4.displayName = 'Form4';

module.exports = Form4;
module.exports.Form4 = Form4;
module.exports.default = Form4;
