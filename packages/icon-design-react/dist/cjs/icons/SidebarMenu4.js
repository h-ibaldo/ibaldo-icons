"use strict";

const { forwardRef } = require('react');

const SidebarMenu4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.000000004900357" y="1.999999995256076" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.000000004900357" y1="5.999999995256076" x2="9.000000004900357" y2="5.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.000000004900357" y1="9.999999995256076" x2="9.000000004900357" y2="9.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.000000004900357" y1="13.999999995256076" x2="9.000000004900357" y2="13.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.000000004900357" y1="17.999999995256076" x2="9.000000004900357" y2="17.999999995256076" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SidebarMenu4.displayName = 'SidebarMenu4';

module.exports = SidebarMenu4;
module.exports.SidebarMenu4 = SidebarMenu4;
module.exports.default = SidebarMenu4;
