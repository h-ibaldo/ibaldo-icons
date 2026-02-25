"use strict";

const { forwardRef } = require('react');

const ConcentricCirclesState22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.999999976489562" cy="11.998779299956368" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999976489562" cy="11.998779299956368" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ConcentricCirclesState22.displayName = 'ConcentricCirclesState22';

module.exports = ConcentricCirclesState22;
module.exports.ConcentricCirclesState22 = ConcentricCirclesState22;
module.exports.default = ConcentricCirclesState22;
