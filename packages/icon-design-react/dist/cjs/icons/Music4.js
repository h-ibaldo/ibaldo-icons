"use strict";

const { forwardRef } = require('react');

const Music4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<ellipse cx="8" cy="18.499999999998181" rx="4" ry="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12 6.999999999998181 20 6.999999999998181 20 1.999999999998181 12 1.999999999998181 12 17.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Music4.displayName = 'Music4';

module.exports = Music4;
module.exports.Music4 = Music4;
module.exports.default = Music4;
