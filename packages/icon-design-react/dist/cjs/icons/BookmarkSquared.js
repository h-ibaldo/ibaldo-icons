"use strict";

const { forwardRef } = require('react');

const BookmarkSquared = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.000000026697307" y="2.000000000007276" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.000000026697307,6.999999999998181h-6.000000000001819c-.552284749830505,0-.999999999998181.447715250169495-.999999999998181,1v9l3.999999999996362-2.000000000009095,4.000000000003638,2.000000000009095V7.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BookmarkSquared.displayName = 'BookmarkSquared';

module.exports = BookmarkSquared;
module.exports.BookmarkSquared = BookmarkSquared;
module.exports.default = BookmarkSquared;
