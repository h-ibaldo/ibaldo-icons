"use strict";

const { forwardRef } = require('react');

const GeometricFormsDeviation22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="6.00000000018008" cy="6.000000000446562" r="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="18.00000000018008" cy="18.000000000447017" r="3.999999999999773" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="14.00000000018008" y="2.000000000446562" width="8" height="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="6.00000000018008" cy="18.000000000447017" r="3.999999999999773" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

GeometricFormsDeviation22.displayName = 'GeometricFormsDeviation22';

module.exports = GeometricFormsDeviation22;
module.exports.GeometricFormsDeviation22 = GeometricFormsDeviation22;
module.exports.default = GeometricFormsDeviation22;
