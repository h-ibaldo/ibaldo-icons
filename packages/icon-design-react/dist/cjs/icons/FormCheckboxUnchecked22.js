"use strict";

const { forwardRef } = require('react');

const FormCheckboxUnchecked22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="15.999999978659616" y1="11.99877586740331" x2="21.999999978659616" y2="11.99877586740331" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.999999978659616" y="6.99877586740331" width="10" height="10" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FormCheckboxUnchecked22.displayName = 'FormCheckboxUnchecked22';

module.exports = FormCheckboxUnchecked22;
module.exports.FormCheckboxUnchecked22 = FormCheckboxUnchecked22;
module.exports.default = FormCheckboxUnchecked22;
