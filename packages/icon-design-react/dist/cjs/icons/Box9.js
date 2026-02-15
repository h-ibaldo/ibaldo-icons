"use strict";

const { forwardRef } = require('react');

const Box9 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polygon points="12 1.999999999998181 2 5.999999999998181 2 17.999999999998181 12 21.999999999998181 22 17.999999999998181 22 5.999999999998181 12 1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="22 5.999999999998181 12 9.999999999998181 12 21.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17 3.999999999998181 7 7.999999999998181 7 10.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Box9.displayName = 'Box9';

module.exports = Box9;
module.exports.Box9 = Box9;
module.exports.default = Box9;
