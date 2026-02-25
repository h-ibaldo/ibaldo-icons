"use strict";

const { forwardRef } = require('react');

const WindowControlFullScreenCircle2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="12.000000002980414" cy="11.998779299186936" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.000000002980414 11.998779299186936 8.000000002980414 7.998779299186936 12.000000002980414 7.998779299186936" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.000000002980414 11.998779299186936 16.000000002980414 15.998779299186936 12.000000002980414 15.998779299186936" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WindowControlFullScreenCircle2.displayName = 'WindowControlFullScreenCircle2';

module.exports = WindowControlFullScreenCircle2;
module.exports.WindowControlFullScreenCircle2 = WindowControlFullScreenCircle2;
module.exports.default = WindowControlFullScreenCircle2;
