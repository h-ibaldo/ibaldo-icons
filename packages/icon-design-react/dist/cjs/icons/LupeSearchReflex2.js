"use strict";

const { forwardRef } = require('react');

const LupeSearchReflex2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="11.025268548872191" cy="10.99877929993454" r="9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.025268548282838,10.99877929993454c0-2.761423749325331,2.238576251260383-5.000000000585715,5.000000000589353-5.000000000585715" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.389221185583665" y1="17.36273193665329" x2="22.025268548872191" y2="21.99877929993454" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LupeSearchReflex2.displayName = 'LupeSearchReflex2';

module.exports = LupeSearchReflex2;
module.exports.LupeSearchReflex2 = LupeSearchReflex2;
module.exports.default = LupeSearchReflex2;
