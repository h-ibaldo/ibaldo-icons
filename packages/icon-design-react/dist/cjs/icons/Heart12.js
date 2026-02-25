"use strict";

const { forwardRef } = require('react');

const Heart12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M20.475006104339627,5.500000005168658c-1.932983398450233-1.932983398434772-5.067016601569776-1.932983398434772-7,0l-1.5,1.5-1.5-1.5c-1.932983398450233-1.932983398434772-5.067016601569776-1.932983398434772-7,0-1.932983398450233,1.932983398440228-1.932983398450233,5.067016601565228,0,7l8.5,8.5,8.5-8.5c1.932983398430224-1.932983398434772,1.932983398430224-5.067016601559772,0-7Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Heart12.displayName = 'Heart12';

module.exports = Heart12;
module.exports.Heart12 = Heart12;
module.exports.default = Heart12;
