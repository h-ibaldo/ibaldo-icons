"use strict";

const { forwardRef } = require('react');

const DashboardLayout2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="3.000000001580702" y="12.00000002768229" width="7" height="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="13.999999990799552" y="3.00000002768229" width="7" height="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="13.999999990799552" y="16.00000002768229" width="7" height="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="3.000000001580702" y="3.00000002768229" width="7" height="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DashboardLayout2.displayName = 'DashboardLayout2';

module.exports = DashboardLayout2;
module.exports.DashboardLayout2 = DashboardLayout2;
module.exports.default = DashboardLayout2;
