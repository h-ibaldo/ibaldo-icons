"use strict";

const { forwardRef } = require('react');

const Bookmarks2Minus = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M15.000000026699126,5.999999999998181H5.000000026699126c-.552284749828686,0-1,.447715250169495-1,1v15l6-4,6,4V6.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.000000026699126,17.999999999998181V4.999999999998181c0-1.656854249490607-1.343145750508484-3-3-3h-9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.509665274770668" y1="12.499999999998181" x2="12.509665274770668" y2="12.499999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bookmarks2Minus.displayName = 'Bookmarks2Minus';

module.exports = Bookmarks2Minus;
module.exports.Bookmarks2Minus = Bookmarks2Minus;
module.exports.default = Bookmarks2Minus;
