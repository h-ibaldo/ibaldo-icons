"use strict";

const { forwardRef } = require('react');

const AppWindowClock = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M9.999999993642632,21.998779304896743h-5c-1.656854249500611,0-3-1.343145750510303-3-3V4.998779304896743c0-1.656854249493335,1.343145750499389-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993642632" y1="7.998779304896743" x2="21.999999993642632" y2="7.998779304896743" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="16.999999993642632" cy="16.998779304896743" r="5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="18.999999993642632 16.998779299956368 16.999999993651727 16.998779300134629 16.999999993651727 14.998779304896743" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AppWindowClock.displayName = 'AppWindowClock';

module.exports = AppWindowClock;
module.exports.AppWindowClock = AppWindowClock;
module.exports.default = AppWindowClock;
