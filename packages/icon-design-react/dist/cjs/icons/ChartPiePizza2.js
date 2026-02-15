"use strict";

const { forwardRef } = require('react');

const ChartPiePizza2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12.016630450973025" cy="12.000000000480213" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="12.016630450973025" y1="12.000000000480213" x2="19.087675372848025" y2="4.928955078605213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.016630450973025" y1="18.000000000480213" x2="12.016630450973025" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartPiePizza2.displayName = 'ChartPiePizza2';

module.exports = ChartPiePizza2;
module.exports.ChartPiePizza2 = ChartPiePizza2;
module.exports.default = ChartPiePizza2;
