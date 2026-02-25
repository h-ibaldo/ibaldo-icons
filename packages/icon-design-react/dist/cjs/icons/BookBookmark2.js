"use strict";

const { forwardRef } = require('react');

const BookBookmark2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="15.000000026695488 1.999999999998181 15.000000026695488 10.999999999998181 12.000000026695488 8.999999999998181 9.000000026695488 10.999999999998181 9.000000026695488 1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="4.000000026695488" y="1.999999999998181" width="15.999999999998181" height="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.000000026695488" y1="21.999999999998181" x2="20.000000026695488" y2="21.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BookBookmark2.displayName = 'BookBookmark2';

module.exports = BookBookmark2;
module.exports.BookBookmark2 = BookBookmark2;
module.exports.default = BookBookmark2;
