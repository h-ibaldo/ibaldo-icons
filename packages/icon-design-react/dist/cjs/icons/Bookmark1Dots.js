"use strict";

const { forwardRef } = require('react');

const Bookmark1Dots = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M17.999999973299964,1.999999999998181H5.999999973299964c-.552284749829596,0-1,.447715250169495-1,1v19l7-4,7,4V2.999999999998181c0-.552284749830505-.447715250170404-1-1-1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999973299964" y1="7.086284113618603" x2="11.999999973299964" y2="7.076284113618385" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999973299964" y1="10.086284113618603" x2="11.999999973299964" y2="10.076284113618385" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999973299964" y1="13.086284113618603" x2="11.999999973299964" y2="13.076284113618385" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bookmark1Dots.displayName = 'Bookmark1Dots';

module.exports = Bookmark1Dots;
module.exports.Bookmark1Dots = Bookmark1Dots;
module.exports.default = Bookmark1Dots;
