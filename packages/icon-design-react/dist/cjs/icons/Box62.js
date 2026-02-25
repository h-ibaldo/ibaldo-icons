"use strict";

const { forwardRef } = require('react');

const Box62 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2" y="1.999999999998181" width="20" height="20" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15 1.999999999998181 15 8.999999999998181 14 7.999999999998181 13 8.999999999998181 12 7.999999999998181 11 8.999999999998181 10 7.999999999998181 9 8.999999999998181 9 1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Box62.displayName = 'Box62';

module.exports = Box62;
module.exports.Box62 = Box62;
module.exports.default = Box62;
