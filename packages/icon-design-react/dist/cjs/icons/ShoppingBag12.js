"use strict";

const { forwardRef } = require('react');

const ShoppingBag12 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.999999981009751" y="7.953620571095598" width="18" height="14" rx="1.100699078559046" ry="1.100699078559046" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999981009751,11.953620571095598v-6c0-2.209136790177581-1.790859209819246-3.999995999998646-3.999996000000465-3.999995999998646h-.00000799999907c-2.209136790190314,0-3.999996000000465,1.790859209821065-3.999996000000465,3.999995999998646v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ShoppingBag12.displayName = 'ShoppingBag12';

module.exports = ShoppingBag12;
module.exports.ShoppingBag12 = ShoppingBag12;
module.exports.default = ShoppingBag12;
