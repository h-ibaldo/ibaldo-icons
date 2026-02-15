"use strict";

const { forwardRef } = require('react');

const ArrowCircle1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="4 22.000000000320142 4.000000000130058 18 8.000000000440195 18.000000000138243" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.050476074219659,13c-.032653808600116-.328979492191138-.050476074219659-.66241455078125-.050476074219659-1C2,6.477172851558862,6.477172851559772,2,12,2c5.522827148430224,0,10,4.477172851558862,10,10,0,5.522827148439319-4.477172851569776,10-10,10-3.268432617190228,0-6.16162109375-1.5751953125-7.986389160159888-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ArrowCircle1.displayName = 'ArrowCircle1';

module.exports = ArrowCircle1;
module.exports.ArrowCircle1 = ArrowCircle1;
module.exports.default = ArrowCircle1;
