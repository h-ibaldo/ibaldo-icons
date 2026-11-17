"use strict";

const { forwardRef } = require('react');

const ArrowCircle1Slash = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="4.00000000036016 22 4.000000000491127 17.999999999690772 8.000000000800355 17.999999999829015" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22" y1="22" x2="2" y2="2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
  <path d="M2.05047607421875,13c-.03265380859375-.328979492180224-.05047607421875-.662353515621362-.05047607421875-1,0-2.761474609371362,1.11932373046875-5.261474609371362,2.928955078125-7.071044921871362" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19.071044921875,19.071044921878638c-1.809692382813409,1.8095703125-4.30963134765625,2.928955078121362-7.071044921875,2.928955078121362-3.268432617188409,0-6.16162109375-1.5751953125-7.98638916015625-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.604125976561591,2.604125976569776c1.061706542969659-.383911132819776,2.201721191407159-.604125976569776,3.395874023438409-.604125976569776,5.522827148436591,0,10,4.477172851569776,10,10,0,1.194091796878638-.22015380859375,2.334228515628638-.604125976563409,3.395874023439319" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

ArrowCircle1Slash.displayName = 'ArrowCircle1Slash';

module.exports = ArrowCircle1Slash;
module.exports.ArrowCircle1Slash = ArrowCircle1Slash;
module.exports.default = ArrowCircle1Slash;
