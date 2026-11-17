"use strict";

const { forwardRef } = require('react');

const SwitchToggleOff3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999977100742" y="5.99999656343789" width="20" height="11.999999999996362" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.999999977100742,5.99999656343789h1c1.656854249489697,0,3,1.343145750506665,3,3v5.999999999996362c0,1.656854249493335-1.343145750510303,3-3,3h-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchToggleOff3.displayName = 'SwitchToggleOff3';

module.exports = SwitchToggleOff3;
module.exports.SwitchToggleOff3 = SwitchToggleOff3;
module.exports.default = SwitchToggleOff3;
