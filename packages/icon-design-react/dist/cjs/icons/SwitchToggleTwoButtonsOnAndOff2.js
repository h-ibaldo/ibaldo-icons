"use strict";

const { forwardRef } = require('react');

const SwitchToggleTwoButtonsOnAndOff2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="18.499999977098923" cy="6.499996563434252" r="3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.055603004439035,3.999996563434252H4.499999977098923c-1.380737304689319,0-2.5,1.1192626953125-2.5,2.5,0,1.38067626953125,1.119262695310681,2.5,2.5,2.5h11.555603027340112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="5.499999977092557" cy="17.499996563728018" r="3.499999999999091" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.944396949749716,19.999996563434252h11.555603027349207c1.380737304680224,0,2.5-1.11932373046875,2.5-2.5,0-1.3807373046875-1.119262695319776-2.5-2.5-2.5H7.944396949749716" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchToggleTwoButtonsOnAndOff2.displayName = 'SwitchToggleTwoButtonsOnAndOff2';

module.exports = SwitchToggleTwoButtonsOnAndOff2;
module.exports.SwitchToggleTwoButtonsOnAndOff2 = SwitchToggleTwoButtonsOnAndOff2;
module.exports.default = SwitchToggleTwoButtonsOnAndOff2;
