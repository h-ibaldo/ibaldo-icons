"use strict";

const { forwardRef } = require('react');

const FormRadiusChecked2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="18.00000000376167" y1="11.999999998985004" x2="22.00000000376167" y2="11.999999998985004" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.00000000376167" cy="11.999999998985004" r="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.00000000376167" cy="11.999999998984094" r=".999999999999545" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FormRadiusChecked2.displayName = 'FormRadiusChecked2';

module.exports = FormRadiusChecked2;
module.exports.FormRadiusChecked2 = FormRadiusChecked2;
module.exports.default = FormRadiusChecked2;
