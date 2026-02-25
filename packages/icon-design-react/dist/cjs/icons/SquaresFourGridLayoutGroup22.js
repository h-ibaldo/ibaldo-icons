"use strict";

const { forwardRef } = require('react');

const SquaresFourGridLayoutGroup22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.000000005000402" y="2.000000003888999" width="7" height="6.999999999997272" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="15.000000005000402" y="2.000000003888999" width="7" height="6.999999999997272" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000005000402" y="15.000000003886271" width="7" height="7" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="15.000000005000402" y="15.000000003886271" width="7" height="7" rx="2" ry="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SquaresFourGridLayoutGroup22.displayName = 'SquaresFourGridLayoutGroup22';

module.exports = SquaresFourGridLayoutGroup22;
module.exports.SquaresFourGridLayoutGroup22 = SquaresFourGridLayoutGroup22;
module.exports.default = SquaresFourGridLayoutGroup22;
