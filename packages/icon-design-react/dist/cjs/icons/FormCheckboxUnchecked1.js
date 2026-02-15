"use strict";

const { forwardRef } = require('react');

const FormCheckboxUnchecked1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="13.050537107350465" y1="11.998779300185561" x2="22.050537107350465" y2="11.998779300185561" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.050537107350465" y="7.998779300185561" width="8" height="8" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FormCheckboxUnchecked1.displayName = 'FormCheckboxUnchecked1';

module.exports = FormCheckboxUnchecked1;
module.exports.FormCheckboxUnchecked1 = FormCheckboxUnchecked1;
module.exports.default = FormCheckboxUnchecked1;
