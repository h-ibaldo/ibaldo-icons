"use strict";

const { forwardRef } = require('react');

const GeometricFormsInconsistency2 = forwardRef(({
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

GeometricFormsInconsistency2.displayName = 'GeometricFormsInconsistency2';

module.exports = GeometricFormsInconsistency2;
module.exports.GeometricFormsInconsistency2 = GeometricFormsInconsistency2;
module.exports.default = GeometricFormsInconsistency2;
