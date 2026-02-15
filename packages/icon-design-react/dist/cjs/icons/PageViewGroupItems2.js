"use strict";

const { forwardRef } = require('react');

const PageViewGroupItems2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M11.999999994010068,18.998779299956368h-5c-.552284749830505,0-1-.447715250171314-1-1V6.998779299956368c0-.552284749832324.447715250169495-1,1-1h11c.552284749830505,0,1,.447715250167676,1,1v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.999999994010068,13.998779299956368V2.998779299956368c0-.552284749832324.447715250169495-1,1-1h11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <line x1="18.999999994010068" y1="15.998779299956368" x2="18.999999994010068" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="21.999999994010068" y1="18.998779299865419" x2="15.999999994010068" y2="18.99877930004368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

PageViewGroupItems2.displayName = 'PageViewGroupItems2';

module.exports = PageViewGroupItems2;
module.exports.PageViewGroupItems2 = PageViewGroupItems2;
module.exports.default = PageViewGroupItems2;
