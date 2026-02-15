"use strict";

const { forwardRef } = require('react');

const ChartLineArrowUpIncrease12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="2 2 2 22 22 22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6 16 12 10 15 13 22 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="22 10 22 6 18 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartLineArrowUpIncrease12.displayName = 'ChartLineArrowUpIncrease12';

module.exports = ChartLineArrowUpIncrease12;
module.exports.ChartLineArrowUpIncrease12 = ChartLineArrowUpIncrease12;
module.exports.default = ChartLineArrowUpIncrease12;
