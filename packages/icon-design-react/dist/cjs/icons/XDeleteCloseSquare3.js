"use strict";

const { forwardRef } = require('react');

const XDeleteCloseSquare3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="9.999999990870492" y1="14.000000000357431" x2="13.999999990690412" y2="10.000000000538421" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999990590368" y1="14.000000000446562" x2="9.999999990959623" y2="10.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="1.999999990779543" y="2.000000000448381" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

XDeleteCloseSquare3.displayName = 'XDeleteCloseSquare3';

module.exports = XDeleteCloseSquare3;
module.exports.XDeleteCloseSquare3 = XDeleteCloseSquare3;
module.exports.default = XDeleteCloseSquare3;
