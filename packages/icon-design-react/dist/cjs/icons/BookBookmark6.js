"use strict";

const { forwardRef } = require('react');

const BookBookmark6 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="19.000000026699126" y1="13.999999999998181" x2="19.000000026699126" y2="19.000000000007276" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18" y1="18.999999999998181" x2="20.000000026699126" y2="19.000000000007276" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="9.000000026699126" y1="2.000000000007276" x2="9.000000026699126" y2="13.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="9 16.999999999998181 9 21.999999999998181 12 20.999999999998181 15 21.999999999998181 15 16.999999999998181 12 16.999999999998181 9 16.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <path d="M4,16.499999999998181c0,1.20947265625.85888671875,2.217895507810681,2,2.449584960940228" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19,1.999999999998181H6.5c-1.380737304689319,0-2.5,1.119262695310681-2.5,2.5v12c0-1.380737304689319,1.119262695310681-2.5,2.5-2.5h12.5c.55224609375,0,1-.44775390625,1-1V2.999999999998181c0-.55224609375-.44775390625-1-1-1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

BookBookmark6.displayName = 'BookBookmark6';

module.exports = BookBookmark6;
module.exports.BookBookmark6 = BookBookmark6;
module.exports.default = BookBookmark6;
