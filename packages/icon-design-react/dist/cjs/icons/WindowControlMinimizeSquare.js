"use strict";

const { forwardRef } = require('react');

const WindowControlMinimizeSquare = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.94946288328174" y="1.998779303956326" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.94946288328174" y1="16.998779303956326" x2="6.94946288328174" y2="16.998779303956326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WindowControlMinimizeSquare.displayName = 'WindowControlMinimizeSquare';

module.exports = WindowControlMinimizeSquare;
module.exports.WindowControlMinimizeSquare = WindowControlMinimizeSquare;
module.exports.default = WindowControlMinimizeSquare;
