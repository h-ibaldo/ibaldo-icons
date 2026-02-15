"use strict";

const { forwardRef } = require('react');

const Bookmark1FoldedX = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M5.000000026699126,1.999999999998181h13c2.209138999320203,0,4,1.790861000679797,4,4v16l-7-4-7,4V4.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.000000026699126,4.999999999998181c0-1.656854249400567,1.343145750601252-3,3-3,1.656854249400567,0,3,1.343145750599433,3,3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2.000000026699126 4.999999999998181 2.000000026699126 11.999999999998181 8.000000026699126 11.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.000000026699126" y1="12.999999999998181" x2="17.000000026699126" y2="8.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.000000026699126" y1="12.999999999998181" x2="13.000000026699126" y2="8.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bookmark1FoldedX.displayName = 'Bookmark1FoldedX';

module.exports = Bookmark1FoldedX;
module.exports.Bookmark1FoldedX = Bookmark1FoldedX;
module.exports.default = Bookmark1FoldedX;
