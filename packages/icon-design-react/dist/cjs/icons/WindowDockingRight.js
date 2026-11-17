"use strict";

const { forwardRef } = require('react');

const WindowDockingRight = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="5.974731417777548" y="5.998779298355657" width="20" height="12" rx=".999999999997684" ry=".999999999997684" transform="translate(27.973510715414747 -3.975952119961534) rotate(89.999999997423146)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.974731418182273 14.998779299121452 4.974731417782095 11.998779298717636 1.974731417372823 8.998779299121452" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731417511066" y1="5.998779298088266" x2="9.974731417511066" y2="5.998779298626687" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WindowDockingRight.displayName = 'WindowDockingRight';

module.exports = WindowDockingRight;
module.exports.WindowDockingRight = WindowDockingRight;
module.exports.default = WindowDockingRight;
