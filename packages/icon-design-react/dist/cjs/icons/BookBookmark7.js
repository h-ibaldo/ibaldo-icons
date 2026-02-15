"use strict";

const { forwardRef } = require('react');

const BookBookmark7 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M20.000000026699126,2.000000000007276l-13.0000030043484-.000000001327862c-1.656852590191193-.000000000170985-2.9999969956516,1.343144405158455-2.9999969956516,2.999996995338734v.000006000000212c0,1.656852598001024,1.343144411921458,2.999997009590516,2.999997009921572,2.999997009179424l13.000002990078428-.000000003199602v14l-13.000000002719389-.000000011799784c-1.656854248429227-.000000001500666-2.999999997280611-1.343145751568954-2.999999997280611-3V4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.000000026699126" y1="4.999999999998181" x2="20.000000026699126" y2="4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="10.000000026699126 7.999999999998181 10.000000026699126 16.000000000007276 13.000000026699126 14.000000000007276 16.000000026699126 16.000000000007276 16.000000026699126 7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BookBookmark7.displayName = 'BookBookmark7';

module.exports = BookBookmark7;
module.exports.BookBookmark7 = BookBookmark7;
module.exports.default = BookBookmark7;
