"use strict";

const { forwardRef } = require('react');

const FormRadiusUnchecked12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="5.999999991062396" cy="12" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14" y1="12" x2="22" y2="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FormRadiusUnchecked12.displayName = 'FormRadiusUnchecked12';

module.exports = FormRadiusUnchecked12;
module.exports.FormRadiusUnchecked12 = FormRadiusUnchecked12;
module.exports.default = FormRadiusUnchecked12;
