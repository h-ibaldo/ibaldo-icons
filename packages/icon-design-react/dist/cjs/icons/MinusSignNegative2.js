"use strict";

const { forwardRef } = require('react');

const MinusSignNegative2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="17.000000004469257" y1="12.000000003885361" x2="7.000000004469257" y2="12.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MinusSignNegative2.displayName = 'MinusSignNegative2';

module.exports = MinusSignNegative2;
module.exports.MinusSignNegative2 = MinusSignNegative2;
module.exports.default = MinusSignNegative2;
