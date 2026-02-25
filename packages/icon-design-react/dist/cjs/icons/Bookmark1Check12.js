"use strict";

const { forwardRef } = require('react');

const Bookmark1Check12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="14.000000000003638 5.999999999989086 16.000000000003638 7.999999999989086 20.000000000003638 2.999999999989086" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11.000000000007276,2.999999999998181h-5.000000000003638c-.552284749830505,0-1,.447715250169495-1,1v18l7-4,7,4v-11.000000000009095" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Bookmark1Check12.displayName = 'Bookmark1Check12';

module.exports = Bookmark1Check12;
module.exports.Bookmark1Check12 = Bookmark1Check12;
module.exports.default = Bookmark1Check12;
