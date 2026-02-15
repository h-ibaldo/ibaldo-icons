"use strict";

const { forwardRef } = require('react');

const SquareArrowLeft = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="11.000000001078661 14.99999999877582 8.000000001609806 11.999999998237399 11.000000002148226 8.99999999877582" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.000000001609806" y1="11.999999999674401" x2="8.000000001609806" y2="11.999999998237399" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000001614353" y="1.999999999045031" width="20" height="20" rx="1.999999999998408" ry="1.999999999998408" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SquareArrowLeft.displayName = 'SquareArrowLeft';

module.exports = SquareArrowLeft;
module.exports.SquareArrowLeft = SquareArrowLeft;
module.exports.default = SquareArrowLeft;
