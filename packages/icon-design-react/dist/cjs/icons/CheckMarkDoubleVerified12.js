"use strict";

const { forwardRef } = require('react');

const CheckMarkDoubleVerified12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="3.974731440090181 13.000000003874447 6.974731440090181 16.000000003874447 13.974731440090181 8.000000003874447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.974731440090181 13.000000003874447 12.974731440090181 16.000000003874447 19.974731440090181 8.000000003874447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckMarkDoubleVerified12.displayName = 'CheckMarkDoubleVerified12';

module.exports = CheckMarkDoubleVerified12;
module.exports.CheckMarkDoubleVerified12 = CheckMarkDoubleVerified12;
module.exports.default = CheckMarkDoubleVerified12;
