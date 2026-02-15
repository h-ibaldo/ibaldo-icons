"use strict";

const { forwardRef } = require('react');

const CheckboxIndeterminateCircle1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8" y1="12" x2="16" y2="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxIndeterminateCircle1.displayName = 'CheckboxIndeterminateCircle1';

module.exports = CheckboxIndeterminateCircle1;
module.exports.CheckboxIndeterminateCircle1 = CheckboxIndeterminateCircle1;
module.exports.default = CheckboxIndeterminateCircle1;
