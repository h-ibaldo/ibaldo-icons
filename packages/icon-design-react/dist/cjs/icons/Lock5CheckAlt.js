"use strict";

const { forwardRef } = require('react');

const Lock5CheckAlt = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M5.949462885141656,10.000000000480213v-3c0-2.761420987731981,2.238574012269964-5,4.999995000000126-5l.000010000000657.000004999998055c2.761420987728343,0,4.999994999999217,2.238574012269964,4.999994999999217,4.999995000001945v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.949462885141656,15.000000000480213c0-3.86602783203125-3.134033203125-7-7-7s-7,3.13397216796875-7,7c0,3.865966796875,3.134033203125,7,7,7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Lock5CheckAlt.displayName = 'Lock5CheckAlt';

module.exports = Lock5CheckAlt;
module.exports.Lock5CheckAlt = Lock5CheckAlt;
module.exports.default = Lock5CheckAlt;
