"use strict";

const { forwardRef } = require('react');

const RestoreArrowClockwise2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="2.999999981180736 21.999996564258254 2.999999981318979 16.999996564258254 7.999999981180736 16.999996564392859" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.999999981180736,11.999996564258254C1.999999981180736,6.477169415820754,6.477172832750512,1.999996564258254,11.999999981180736,1.999996564258254c5.522827148439319,0,10,4.4771728515625,10,10,0,5.52288818359375-4.477172851560681,10-10,10-3.69921875,0-6.921447753900793-2.01385498046875-8.651245117180224-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.999999981180736" cy="11.999996564258254" r="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

RestoreArrowClockwise2.displayName = 'RestoreArrowClockwise2';

module.exports = RestoreArrowClockwise2;
module.exports.RestoreArrowClockwise2 = RestoreArrowClockwise2;
module.exports.default = RestoreArrowClockwise2;
