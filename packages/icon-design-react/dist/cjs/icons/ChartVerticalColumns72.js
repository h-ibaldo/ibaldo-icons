"use strict";

const { forwardRef } = require('react');

const ChartVerticalColumns72 = forwardRef(({
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
  <polyline points="5 22 5 13 10 13 10 4 15 4 15 9 20 9 20 22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10" y1="13" x2="10" y2="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15" y1="9" x2="15" y2="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ChartVerticalColumns72.displayName = 'ChartVerticalColumns72';

module.exports = ChartVerticalColumns72;
module.exports.ChartVerticalColumns72 = ChartVerticalColumns72;
module.exports.default = ChartVerticalColumns72;
