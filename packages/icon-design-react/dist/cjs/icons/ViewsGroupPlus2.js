"use strict";

const { forwardRef } = require('react');

const ViewsGroupPlus2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M7.999999993639904,21.998779299956368h-1c-.552284749829596,0-1-.447715250171314-1-1V6.998779299956368c0-.552284749832324.447715250170404-1,1-1h14c.552284749829596,0,1,.447715250167676,1,1v1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="15.999999993639904" cy="15.998779299959097" r="5.999999999998636" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <line x1="15.999999993639904" y1="13.498779299956368" x2="15.999999993639904" y2="18.498779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="18.499999993639904" y1="15.998779299865419" x2="13.499999993639904" y2="15.99877930004368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M1.999999993639904,16.998779299956368V2.998779299956368c0-.552284749832324.447715250170404-1,1-1h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ViewsGroupPlus2.displayName = 'ViewsGroupPlus2';

module.exports = ViewsGroupPlus2;
module.exports.ViewsGroupPlus2 = ViewsGroupPlus2;
module.exports.default = ViewsGroupPlus2;
