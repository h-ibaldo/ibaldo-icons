"use strict";

const { forwardRef } = require('react');

const Folder15 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M18,21.999999999998181H4c-.552284749831415,0-1-.447715250169495-1-1V2.999999999998181c0-.552284749830505.447715250168585-1,1-1h13v7.00000789177102l2,1.99999210822898v10c0,.552284749830505-.447715250170404,1-1,1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17 1.999999999998181 21 1.999999999998181 21 9.000007891769201 19 10.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Folder15.displayName = 'Folder15';

module.exports = Folder15;
module.exports.Folder15 = Folder15;
module.exports.default = Folder15;
