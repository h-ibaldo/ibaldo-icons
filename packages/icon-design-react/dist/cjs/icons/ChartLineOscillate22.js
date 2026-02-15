"use strict";

const { forwardRef } = require('react');

const ChartLineOscillate22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="4 12.000000000480213 9 19.000000000480213 15 5.000000000480213 20 12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartLineOscillate22.displayName = 'ChartLineOscillate22';

module.exports = ChartLineOscillate22;
module.exports.ChartLineOscillate22 = ChartLineOscillate22;
module.exports.default = ChartLineOscillate22;
