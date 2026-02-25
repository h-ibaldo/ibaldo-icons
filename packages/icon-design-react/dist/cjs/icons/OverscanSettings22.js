"use strict";

const { forwardRef } = require('react');

const OverscanSettings22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731449505271" y="3.000000000479304" width="20" height="18.000000000000909" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.974731449505271 8.000000000480213 11.974731450083709 7.000000000298314 10.974731449505271 8.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.974731449505271 16.000000000480213 11.974731450083709 17.000000000662112 10.974731449505271 16.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="16.974731449323372 13.000000000480213 17.974731449505271 12.00000000106229 16.974731449323372 11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="6.974731449683532 13.000000000480213 5.974731449505271 12.00000000106229 6.974731449683532 11.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

OverscanSettings22.displayName = 'OverscanSettings22';

module.exports = OverscanSettings22;
module.exports.OverscanSettings22 = OverscanSettings22;
module.exports.default = OverscanSettings22;
