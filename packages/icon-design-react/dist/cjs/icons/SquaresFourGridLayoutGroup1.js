"use strict";

const { forwardRef } = require('react');

const SquaresFourGridLayoutGroup1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.000000005000402" y="2.000000003888999" width="8" height="8" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="14.000000005000402" y="2.000000003888999" width="8" height="8" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.000000005000402" y="14.000000003886271" width="8" height="8" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="14.000000005000402" y="14.000000003886271" width="8" height="8" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SquaresFourGridLayoutGroup1.displayName = 'SquaresFourGridLayoutGroup1';

module.exports = SquaresFourGridLayoutGroup1;
module.exports.SquaresFourGridLayoutGroup1 = SquaresFourGridLayoutGroup1;
module.exports.default = SquaresFourGridLayoutGroup1;
