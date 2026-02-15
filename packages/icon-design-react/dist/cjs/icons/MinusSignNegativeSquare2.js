"use strict";

const { forwardRef } = require('react');

const MinusSignNegativeSquare2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="4.000000004469257" y="4.000000003886271" width="16" height="15.999999999999091" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.000000004469257" y1="12.000000003885361" x2="9.000000004469257" y2="12.000000003885361" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MinusSignNegativeSquare2.displayName = 'MinusSignNegativeSquare2';

module.exports = MinusSignNegativeSquare2;
module.exports.MinusSignNegativeSquare2 = MinusSignNegativeSquare2;
module.exports.default = MinusSignNegativeSquare2;
