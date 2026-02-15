"use strict";

const { forwardRef } = require('react');

const SquareArrowDown = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="15.025268534591305 12.999999999234205 12.025268534180213 15.99999999883039 9.025268534591305 12.999999998426574" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.025268535260693" y1="7.99999999883039" x2="12.025268534180213" y2="15.999999998834028" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.025268534815041" y="1.99999999883039" width="20" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SquareArrowDown.displayName = 'SquareArrowDown';

module.exports = SquareArrowDown;
module.exports.SquareArrowDown = SquareArrowDown;
module.exports.default = SquareArrowDown;
