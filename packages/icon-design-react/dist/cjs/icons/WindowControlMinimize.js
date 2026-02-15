"use strict";

const { forwardRef } = require('react');

const WindowControlMinimize = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="18.94946288328174" y1="18.998779303956326" x2="4.94946288328174" y2="18.998779303956326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WindowControlMinimize.displayName = 'WindowControlMinimize';

module.exports = WindowControlMinimize;
module.exports.WindowControlMinimize = WindowControlMinimize;
module.exports.default = WindowControlMinimize;
