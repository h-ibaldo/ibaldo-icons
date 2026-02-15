"use strict";

const { forwardRef } = require('react');

const CheckboxIndeterminateSquare12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="4" y="4" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8" y1="12" x2="16" y2="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxIndeterminateSquare12.displayName = 'CheckboxIndeterminateSquare12';

module.exports = CheckboxIndeterminateSquare12;
module.exports.CheckboxIndeterminateSquare12 = CheckboxIndeterminateSquare12;
module.exports.default = CheckboxIndeterminateSquare12;
