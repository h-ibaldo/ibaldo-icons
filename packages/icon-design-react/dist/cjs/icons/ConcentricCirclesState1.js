"use strict";

const { forwardRef } = require('react');

const ConcentricCirclesState1 = forwardRef(({
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
    viewBox: "0 0 24 24.000000000000909",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.999999976489562" cy="11.998779299956368" r="10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999976489562" cy="11.998779299956368" r="6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ConcentricCirclesState1.displayName = 'ConcentricCirclesState1';

module.exports = ConcentricCirclesState1;
module.exports.ConcentricCirclesState1 = ConcentricCirclesState1;
module.exports.default = ConcentricCirclesState1;
