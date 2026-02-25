"use strict";

const { forwardRef } = require('react');

const ConcentricCirclesState32 = forwardRef(({
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
  <circle cx="11.99999997649229" cy="11.998779299955459" r="3.999999999995453" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ConcentricCirclesState32.displayName = 'ConcentricCirclesState32';

module.exports = ConcentricCirclesState32;
module.exports.ConcentricCirclesState32 = ConcentricCirclesState32;
module.exports.default = ConcentricCirclesState32;
