"use strict";

const { forwardRef } = require('react');

const RectangleArrowOpenInPopUp22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M7.999999993642632,21.998779299956368h-1c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h10c1.656854249500611,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750499389,3-3,3h-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.999999993642632" y1="6.998779299956368" x2="19.999999993642632" y2="6.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.999999993642632 15.998779299956368 11.999999993642632 12.998779299956368 14.999999993642632 15.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999993642632" y1="12.998779299956368" x2="11.999999993642632" y2="21.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

RectangleArrowOpenInPopUp22.displayName = 'RectangleArrowOpenInPopUp22';

module.exports = RectangleArrowOpenInPopUp22;
module.exports.RectangleArrowOpenInPopUp22 = RectangleArrowOpenInPopUp22;
module.exports.default = RectangleArrowOpenInPopUp22;
