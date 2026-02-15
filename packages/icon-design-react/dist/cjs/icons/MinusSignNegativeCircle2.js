"use strict";

const { forwardRef } = require('react');

const MinusSignNegativeCircle2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12.000000004469257" cy="12.000000003886498" r="8.000000000000114" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.000000004469257" y1="12.000000003885361" x2="9.000000004469257" y2="12.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MinusSignNegativeCircle2.displayName = 'MinusSignNegativeCircle2';

module.exports = MinusSignNegativeCircle2;
module.exports.MinusSignNegativeCircle2 = MinusSignNegativeCircle2;
module.exports.default = MinusSignNegativeCircle2;
