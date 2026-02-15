"use strict";

const { forwardRef } = require('react');

const PageViewSingle = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="16.999999994219252" y1="9.998779300538445" x2="6.999999994219252" y2="9.998779300090973" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999994399332" y1="13.998779299956368" x2="6.999999994399332" y2="13.998779299505259" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999994399332" y1="17.998779300403839" x2="6.999999994399332" y2="17.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999994410246" y1="5.998779300538445" x2="6.999999994410246" y2="5.998779300090973" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="2.999999994394784" y="1.998779300314709" width="18" height="19.999999999236024" rx=".999999999997829" ry=".999999999997829" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

PageViewSingle.displayName = 'PageViewSingle';

module.exports = PageViewSingle;
module.exports.PageViewSingle = PageViewSingle;
module.exports.default = PageViewSingle;
