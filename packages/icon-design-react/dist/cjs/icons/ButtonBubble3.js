"use strict";

const { forwardRef } = require('react');

const ButtonBubble3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999995180133" y="6.999999996999868" width="20" height="10.000000007293337" rx="4.999995005749084" ry="4.999995005749084" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ButtonBubble3.displayName = 'ButtonBubble3';

module.exports = ButtonBubble3;
module.exports.ButtonBubble3 = ButtonBubble3;
module.exports.default = ButtonBubble3;
