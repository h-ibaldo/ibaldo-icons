"use strict";

const { forwardRef } = require('react');

const ArrowsClockwise32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="11 2 13 4 11 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.99999999981992 22 11 19.999999999818101 13.00000000018008 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.775806124480368,5.581312473917933c1.956869189460122,1.458376179940387,3.224193875519632,3.790532082850405,3.224193875519632,6.418687526082067,0,4.418277998400299-3.581722001599701,8-8,8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.224193874950288,18.418687525638234c-1.956869189340068-1.458376180107734-3.224193875190394-3.79053208312871-3.224193874950288-6.418687526358553.000000000400178-4.418277998400299,3.581722002320021-7.999999999679858,8.00000000072032-7.99999999927968" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ArrowsClockwise32.displayName = 'ArrowsClockwise32';

module.exports = ArrowsClockwise32;
module.exports.ArrowsClockwise32 = ArrowsClockwise32;
module.exports.default = ArrowsClockwise32;
