"use strict";

const { forwardRef } = require('react');

const ChartVerticalColumns12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="15.016630450973025 3.000000000480213 15.016630450973025 8.000000000480213 9.016630450973025 8.000000000480213 9.016630450973025 13.000000000480213 3.016630450973025 13.000000000480213 3.016630450973025 21.000000000480213 9.016630450973025 21.000000000480213 15.016630450973025 21.000000000480213 21.016630450973025 21.000000000480213 21.016630450973025 3.000000000480213 15.016630450973025 3.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.016630450973025" y1="8.000000000480213" x2="15.016630450973025" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.016630450973025" y1="13.000000000480213" x2="9.016630450973025" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartVerticalColumns12.displayName = 'ChartVerticalColumns12';

module.exports = ChartVerticalColumns12;
module.exports.ChartVerticalColumns12 = ChartVerticalColumns12;
module.exports.default = ChartVerticalColumns12;
