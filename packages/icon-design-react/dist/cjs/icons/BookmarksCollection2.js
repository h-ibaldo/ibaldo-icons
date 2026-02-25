"use strict";

const { forwardRef } = require('react');

const BookmarksCollection2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M18,5H6c-.552284749830505,0-1,.447715250170404-1,1v16l7-4,7,4V6c0-.552284749829596-.447715250169495-1-1-1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18,5v-2c0-.552284749829596-.447715250169495-1-1-1H7c-.552284749830505,0-1,.447715250170404-1,1v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BookmarksCollection2.displayName = 'BookmarksCollection2';

module.exports = BookmarksCollection2;
module.exports.BookmarksCollection2 = BookmarksCollection2;
module.exports.default = BookmarksCollection2;
