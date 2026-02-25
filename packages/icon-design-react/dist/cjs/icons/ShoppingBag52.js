"use strict";

const { forwardRef } = require('react');

const ShoppingBag52 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M18.693980625179393,21.999999999998181H5.306019374820607c-1.217098695380628,0-2.152022735501305-1.077976475251489-1.979898987330671-2.282842712469574l1.428571428570649-10c.140756782389872-.985297476679989.984598234119403-1.717157287530426,1.979898987328852-1.717157287530426h10.530818393221125c.995300753198535,0,1.83914220493898.731859810850437,1.979898987319757,1.717157287530426l1.42857142856883,10c.172123748181548,1.204866237218084-.762800291948224,2.282842712469574-1.979898987319757,2.282842712469574Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15,10.999999999998181v-5.999999007090082c0-1.656852591739153-1.343144407590444-2.999996997870767-2.999996999329596-2.999996996080881h-.000006000000212c-1.656852587890171.000000001789886-2.999996990980435,1.343144404829218-2.999996992830347,2.999996992719389l-.000000007839844,5.999999010451575" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ShoppingBag52.displayName = 'ShoppingBag52';

module.exports = ShoppingBag52;
module.exports.ShoppingBag52 = ShoppingBag52;
module.exports.default = ShoppingBag52;
