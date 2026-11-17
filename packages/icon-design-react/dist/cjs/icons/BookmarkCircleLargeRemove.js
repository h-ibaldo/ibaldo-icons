"use strict";

const { forwardRef } = require('react');

const BookmarkCircleLargeRemove = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="15.999999975729679" cy="7.999999997570285" r="5.999999997575287" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999960709829" y1="7.999999999998181" x2="17.999999960709829" y2="7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999999998181,1.999999999998181H2.999999973304512c-.55230712890625,0-1,.447692871090112-1,1v19l7-4,7,4v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BookmarkCircleLargeRemove.displayName = 'BookmarkCircleLargeRemove';

module.exports = BookmarkCircleLargeRemove;
module.exports.BookmarkCircleLargeRemove = BookmarkCircleLargeRemove;
module.exports.default = BookmarkCircleLargeRemove;
