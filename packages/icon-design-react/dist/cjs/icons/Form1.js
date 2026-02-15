"use strict";

const { forwardRef } = require('react');

const Form1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.000000005000402" y="2.000000003886271" width="20" height="5" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000005000402" y="11.000000003886271" width="20" height="5" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="12.000000002616162" y="20.000000004948035" width="10" height="1.999999987357029" rx=".999999001110285" ry=".999999001110285" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000005029506" y1="2.000000003866262" x2="12.000000005029506" y2="2.000000003866262" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Form1.displayName = 'Form1';

module.exports = Form1;
module.exports.Form1 = Form1;
module.exports.default = Form1;
