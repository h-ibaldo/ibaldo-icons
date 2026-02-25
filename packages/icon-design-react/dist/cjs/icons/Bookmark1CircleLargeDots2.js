"use strict";

const { forwardRef } = require('react');

const Bookmark1CircleLargeDots2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M15.999999999998181,1.999999999998181H2.999999973304512c-.55230712890625,0-1,.447692871090112-1,1v19l7-4,7,4v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <circle cx="15.99999997087798" cy="7.999999997570285" r="5.99999999757506" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.999999955856765" y1="7.999999999998181" x2="14.009999968451666" y2="7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.999999955856765" y1="7.999999999998181" x2="17.98999996845123" y2="7.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

Bookmark1CircleLargeDots2.displayName = 'Bookmark1CircleLargeDots2';

module.exports = Bookmark1CircleLargeDots2;
module.exports.Bookmark1CircleLargeDots2 = Bookmark1CircleLargeDots2;
module.exports.default = Bookmark1CircleLargeDots2;
