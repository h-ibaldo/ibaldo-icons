"use strict";

const { forwardRef } = require('react');

const Box72 = forwardRef(({
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
  <polyline points="15 1.999999999998181 15 7.999999999998181 14 6.999999999998181 13 7.999999999998181 12 6.999999999998181 11 7.999999999998181 10 6.999999999998181 9 7.999999999998181 9 1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="11" y="13.999999999998181" width="7" height="3.999999999688953" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Box72.displayName = 'Box72';

module.exports = Box72;
module.exports.Box72 = Box72;
module.exports.default = Box72;
