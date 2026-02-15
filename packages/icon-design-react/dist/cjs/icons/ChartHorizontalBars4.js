"use strict";

const { forwardRef } = require('react');

const ChartHorizontalBars4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="3.016630450973025 19.000000000480213 12.016630450973025 19.000000000480213 12.016630450973025 14.000000000480213 21.016630450973025 14.000000000480213 21.016630450973025 9.000000000480213 16.016630450973025 9.000000000480213 16.016630450973025 4.000000000480213 3.016630450973025 4.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.016630450973025" y1="2.000000000480213" x2="3.016630450973025" y2="21.500000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.016630450973025" y1="14.000000000480213" x2="3.016630450973025" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.016630450973025" y1="9.000000000480213" x2="3.016630450973025" y2="9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartHorizontalBars4.displayName = 'ChartHorizontalBars4';

module.exports = ChartHorizontalBars4;
module.exports.ChartHorizontalBars4 = ChartHorizontalBars4;
module.exports.default = ChartHorizontalBars4;
