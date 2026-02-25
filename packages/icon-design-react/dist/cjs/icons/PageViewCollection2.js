"use strict";

const { forwardRef } = require('react');

const PageViewCollection2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999991464847" y="1.998779303665287" width="20" height="19.999999999998181" rx=".999999999999434" ry=".999999999999434" transform="translate(23.999999982333101 23.997558607925406) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999993639904" y1="1.998779299956368" x2="11.999999993639904" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999993639904" y1="11.998779299956368" x2="1.999999993639904" y2="11.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="5.999999993639904" y="5.998779299956368" width="2" height="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polygon points="15.499999993639904 7.998779299956368 18.499999993639904 7.998779299956368 16.999999993639904 5.498779299956368 15.499999993639904 7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.999999993639904" cy="16.998779299956368" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999993639904" y1="14.998779299956368" x2="6.999999993639904" y2="18.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.999999993639904" y1="16.998779299956368" x2="4.999999993639904" y2="16.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PageViewCollection2.displayName = 'PageViewCollection2';

module.exports = PageViewCollection2;
module.exports.PageViewCollection2 = PageViewCollection2;
module.exports.default = PageViewCollection2;
