"use strict";

const { forwardRef } = require('react');

const DownloadArrowDownSquare12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.974731450037325" y="2.000000000459295" width="20" height="20" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="14.974731450037325 11.000000000462023 11.974731449364299 14.000000000462023 8.974731450037325 11.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731451114167" y1="6.000000000462023" x2="11.974731449364299" y2="14.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.974731450037325" y1="18.000000000462023" x2="16.974731450037325" y2="18.000000000462023" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

DownloadArrowDownSquare12.displayName = 'DownloadArrowDownSquare12';

module.exports = DownloadArrowDownSquare12;
module.exports.DownloadArrowDownSquare12 = DownloadArrowDownSquare12;
module.exports.default = DownloadArrowDownSquare12;
