"use strict";

const { forwardRef } = require('react');

const WindowDockingHorizontalDocking = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731417511066" y="1.998779298535737" width="20" height="20" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.974731417511066" y1="5.998779298535737" x2="21.974731417511066" y2="5.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731417511066" y1="9.998779298535737" x2="11.974731417511066" y2="9.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731417511066" y1="13.998779298535737" x2="11.974731417511066" y2="13.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731417511066" y1="13.998779298535737" x2="11.974731417511066" y2="13.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.974731417511066" y1="17.998779298535737" x2="11.974731417511066" y2="17.998779298535737" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

WindowDockingHorizontalDocking.displayName = 'WindowDockingHorizontalDocking';

module.exports = WindowDockingHorizontalDocking;
module.exports.WindowDockingHorizontalDocking = WindowDockingHorizontalDocking;
module.exports.default = WindowDockingHorizontalDocking;
