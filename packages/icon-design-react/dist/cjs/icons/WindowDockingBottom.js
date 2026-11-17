"use strict";

const { forwardRef } = require('react');

const WindowDockingBottom = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731417511066" y="9.998779298535737" width="20" height="12" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731417511066 4.998779298535737 11.974731417511066 1.998779298535737 14.974731417511066 4.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731417511066" y1="13.998779298535737" x2="21.974731417511066" y2="13.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WindowDockingBottom.displayName = 'WindowDockingBottom';

module.exports = WindowDockingBottom;
module.exports.WindowDockingBottom = WindowDockingBottom;
module.exports.default = WindowDockingBottom;
