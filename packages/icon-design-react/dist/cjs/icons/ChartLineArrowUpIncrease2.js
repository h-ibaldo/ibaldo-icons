"use strict";

const { forwardRef } = require('react');

const ChartLineArrowUpIncrease2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="2 18 10 11 14 15 22 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="22 11 22 7 18 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartLineArrowUpIncrease2.displayName = 'ChartLineArrowUpIncrease2';

module.exports = ChartLineArrowUpIncrease2;
module.exports.ChartLineArrowUpIncrease2 = ChartLineArrowUpIncrease2;
module.exports.default = ChartLineArrowUpIncrease2;
