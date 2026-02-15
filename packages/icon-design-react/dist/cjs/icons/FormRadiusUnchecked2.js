"use strict";

const { forwardRef } = require('react');

const FormRadiusUnchecked2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="18.000000000251021" y1="11.999999995703547" x2="22.000000000251021" y2="11.999999995703547" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.000000000251021" cy="11.999999995703547" r="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FormRadiusUnchecked2.displayName = 'FormRadiusUnchecked2';

module.exports = FormRadiusUnchecked2;
module.exports.FormRadiusUnchecked2 = FormRadiusUnchecked2;
module.exports.default = FormRadiusUnchecked2;
