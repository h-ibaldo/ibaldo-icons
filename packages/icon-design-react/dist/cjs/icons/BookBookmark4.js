"use strict";

const { forwardRef } = require('react');

const BookBookmark4 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="15.000000026699126 1.999999999998181 15.000000026699126 10.999999999998181 12.000000026699126 8.999999999998181 9.000000026699126 10.999999999998181 9.000000026699126 1.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="4.000000026699126" y="1.999999999998181" width="16" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BookBookmark4.displayName = 'BookBookmark4';

module.exports = BookBookmark4;
module.exports.BookBookmark4 = BookBookmark4;
module.exports.default = BookBookmark4;
