"use strict";

const { forwardRef } = require('react');

const CheckboxIndeterminateSquare22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2" y="2" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7" y1="12" x2="17" y2="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckboxIndeterminateSquare22.displayName = 'CheckboxIndeterminateSquare22';

module.exports = CheckboxIndeterminateSquare22;
module.exports.CheckboxIndeterminateSquare22 = CheckboxIndeterminateSquare22;
module.exports.default = CheckboxIndeterminateSquare22;
