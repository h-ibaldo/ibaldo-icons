"use strict";

const { forwardRef } = require('react');

const GeometricFormsInconsistency = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731445219732" y="2.000000000448381" width="6" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="12.974731445219732" y="6.000000000448381" width="9" height="12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

GeometricFormsInconsistency.displayName = 'GeometricFormsInconsistency';

module.exports = GeometricFormsInconsistency;
module.exports.GeometricFormsInconsistency = GeometricFormsInconsistency;
module.exports.default = GeometricFormsInconsistency;
