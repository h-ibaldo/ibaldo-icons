"use strict";

const { forwardRef } = require('react');

const CheckMark2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="4.974731440080177 12.000000003874447 9.974731440080177 17.000000003874447 18.974731440080177 7.000000003874447" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

CheckMark2.displayName = 'CheckMark2';

module.exports = CheckMark2;
module.exports.CheckMark2 = CheckMark2;
module.exports.default = CheckMark2;
