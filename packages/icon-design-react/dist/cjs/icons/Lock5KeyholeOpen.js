"use strict";

const { forwardRef } = require('react');

const Lock5KeyholeOpen = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.949462885139837" cy="15.000000000480213" r="7.000000000000001" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.949462885139837" y1="18.000000000480213" x2="11.949462885139837" y2="14.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="11.949462885139837" cy="13.000000000480213" r="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.527343744110112,5.000000000480213c-.772216796870453-1.764404296875-2.528686523430224-3-4.577880859370453-3-2.761413574219659,0-5,2.23858642578125-5,5v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Lock5KeyholeOpen.displayName = 'Lock5KeyholeOpen';

module.exports = Lock5KeyholeOpen;
module.exports.Lock5KeyholeOpen = Lock5KeyholeOpen;
module.exports.default = Lock5KeyholeOpen;
