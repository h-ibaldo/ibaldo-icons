"use strict";

const { forwardRef } = require('react');

const MinusSignNegativeCircle12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="16.000000004469257" y1="12.000000003885361" x2="8.000000004469257" y2="12.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="12.000000004469257" cy="12.000000003885589" r="9.999999999999659" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MinusSignNegativeCircle12.displayName = 'MinusSignNegativeCircle12';

module.exports = MinusSignNegativeCircle12;
module.exports.MinusSignNegativeCircle12 = MinusSignNegativeCircle12;
module.exports.default = MinusSignNegativeCircle12;
