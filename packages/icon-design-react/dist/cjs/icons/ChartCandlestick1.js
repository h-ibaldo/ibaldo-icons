"use strict";

const { forwardRef } = require('react');

const ChartCandlestick1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.016630450973025" y="7.000000000480213" width="4" height="7.999999999996362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.016630450973025" y1="4.000000000480213" x2="4.016630450973025" y2="7.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.016630450973025" y1="15.000000000480213" x2="4.016630450973025" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="10.016630450973025" y="11.000000000480213" width="4" height="7.999999999996362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.016630450973025" y1="8.000000000480213" x2="12.016630450973025" y2="11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.016630450973025" y1="19.000000000480213" x2="12.016630450973025" y2="22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="18.016630450973025" y="5.000000000480213" width="4" height="7.999999999996362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.016630450973025" y1="2.000000000480213" x2="20.016630450973025" y2="5.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.016630450973025" y1="13.000000000480213" x2="20.016630450973025" y2="16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartCandlestick1.displayName = 'ChartCandlestick1';

module.exports = ChartCandlestick1;
module.exports.ChartCandlestick1 = ChartCandlestick1;
module.exports.default = ChartCandlestick1;
