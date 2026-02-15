"use strict";

const { forwardRef } = require('react');

const ChartLineOscillate12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="7 10 11 16 17 4 21 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2 2 2 22 22 22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartLineOscillate12.displayName = 'ChartLineOscillate12';

module.exports = ChartLineOscillate12;
module.exports.ChartLineOscillate12 = ChartLineOscillate12;
module.exports.default = ChartLineOscillate12;
