"use strict";

const { forwardRef } = require('react');

const Lock5CheckChecked2Open = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M15.527343744516656,5.000000000480213c-.772216796875-1.764404296875-2.5286865234375-3-4.577880859375-3-2.761413574217841,0-5,2.23858642578125-5,5v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17.949462885141656,15.000000000480213c0-3.86602783203125-3.134033203125-7-7-7s-7,3.13397216796875-7,7c0,3.865966796875,3.134033203125,7,7,7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Lock5CheckChecked2Open.displayName = 'Lock5CheckChecked2Open';

module.exports = Lock5CheckChecked2Open;
module.exports.Lock5CheckChecked2Open = Lock5CheckChecked2Open;
module.exports.default = Lock5CheckChecked2Open;
