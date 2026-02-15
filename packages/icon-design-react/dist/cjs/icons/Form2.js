"use strict";

const { forwardRef } = require('react');

const Form2 = forwardRef(({
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
  <rect x="7.000000002616162" y="20.000000004948035" width="10" height="1.999999987357029" rx=".999998940923852" ry=".999998940923852" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Form2.displayName = 'Form2';

module.exports = Form2;
module.exports.Form2 = Form2;
module.exports.default = Form2;
