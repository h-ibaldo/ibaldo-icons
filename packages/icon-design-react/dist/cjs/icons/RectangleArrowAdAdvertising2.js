"use strict";

const { forwardRef } = require('react');

const RectangleArrowAdAdvertising2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M3.999999993642632,17.075561526518868V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h10c1.656854249500611,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750499389,3-3,3h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.999999993642632 12.998779299956368 12.999999993642632 12.998779299956368 12.999999993642632 16.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3.999999993642632" y1="21.998779299956368" x2="12.999999993642632" y2="12.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

RectangleArrowAdAdvertising2.displayName = 'RectangleArrowAdAdvertising2';

module.exports = RectangleArrowAdAdvertising2;
module.exports.RectangleArrowAdAdvertising2 = RectangleArrowAdAdvertising2;
module.exports.default = RectangleArrowAdAdvertising2;
