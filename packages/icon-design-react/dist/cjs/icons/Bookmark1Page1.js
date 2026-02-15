"use strict";

const { forwardRef } = require('react');

const Bookmark1Page1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="2.000000026695488 1.999999999998181 22.000000026695488 1.999999999998181 22.000000026695488 21.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="9.000000026695488 1.999999999998181 9.000000026695488 17.999999999998181 13.000000026695488 14.999999999998181 17.000000026695488 17.999999999998181 17.000000026695488 1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000026695488" y1="9.999999999998181" x2="5.000000026695488" y2="9.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000026695488" y1="13.999999999998181" x2="5.000000026695488" y2="13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000026695488" y1="17.999999999998181" x2="5.000000026695488" y2="17.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000026695488" y1="21.999999999998181" x2="17.000000026695488" y2="21.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bookmark1Page1.displayName = 'Bookmark1Page1';

module.exports = Bookmark1Page1;
module.exports.Bookmark1Page1 = Bookmark1Page1;
module.exports.default = Bookmark1Page1;
