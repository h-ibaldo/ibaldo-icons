"use strict";

const { forwardRef } = require('react');

const Bookmarks1X = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M14.000000026699126,5.999999999998181H4.000000026699126c-.552284749828686,0-1,.447715250169495-1,1v15l6-4,6,4V6.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.000000026699126,13.999999999998181l6,4V2.999999999998181c0-.552284749830505-.447715250169495-1-1-1h-10c-.552284749828686,0-1,.447715250169495-1,1v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.000000026699126" y1="13.999999999998181" x2="11.000000026699126" y2="9.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.000000026790076" y1="13.999999999909051" x2="7.000000026600901" y2="10.000000000087311" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bookmarks1X.displayName = 'Bookmarks1X';

module.exports = Bookmarks1X;
module.exports.Bookmarks1X = Bookmarks1X;
module.exports.default = Bookmarks1X;
