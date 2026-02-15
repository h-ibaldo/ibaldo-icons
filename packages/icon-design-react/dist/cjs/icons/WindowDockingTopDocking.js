"use strict";

const { forwardRef } = require('react');

const WindowDockingTopDocking = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731417872135" y="1.998779298535737" width="20" height="12" rx=".999999999999706" ry=".999999999999706" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731416881696 21.998779297997316 11.974731417150906 18.998779298266527 14.974731416881696 21.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731418051306" y1="5.998779297637157" x2="21.974731418051306" y2="5.998779299434318" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WindowDockingTopDocking.displayName = 'WindowDockingTopDocking';

module.exports = WindowDockingTopDocking;
module.exports.WindowDockingTopDocking = WindowDockingTopDocking;
module.exports.default = WindowDockingTopDocking;
