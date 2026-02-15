"use strict";

const { forwardRef } = require('react');

const ArrowsSquared1Slash = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="22 15 19.000000000130967 18.000000000141881 16 15.000000000271029" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.999999999596184" y1="2" x2="1.999999999596184" y2="22" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <line x1="14.99999999973079" y1="4" x2="8.99999999973079" y2="4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.99999999973079,18V7c0-.5712890625-.16839599609375-1.099853515619543-.445617675782159-1.554443359369543" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <polyline points="1.99999999973079 9.000000000141881 4.999999999599822 6 7.99999999973079 8.999999999870852" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <line x1="9" y1="20.000000000141881" x2="15" y2="20.000000000141881" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5,6.000000000141881v11c0,.5712890625.16839599609375,1.099853515628638.44561767578125,1.554443359378638" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

ArrowsSquared1Slash.displayName = 'ArrowsSquared1Slash';

module.exports = ArrowsSquared1Slash;
module.exports.ArrowsSquared1Slash = ArrowsSquared1Slash;
module.exports.default = ArrowsSquared1Slash;
