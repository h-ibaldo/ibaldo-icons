"use strict";

const { forwardRef } = require('react');

const Bookmark1Remove = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M10.000000000012733,2.999999999998181h-4.000000000003638c-.552284749830505,0-1,.447715250169495-1,1v18l7-4,7,4v-12.000000000009095" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.000000000012733" y1="4.999999999989086" x2="20.000000000012733" y2="4.999999999989086" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bookmark1Remove.displayName = 'Bookmark1Remove';

module.exports = Bookmark1Remove;
module.exports.Bookmark1Remove = Bookmark1Remove;
module.exports.default = Bookmark1Remove;
