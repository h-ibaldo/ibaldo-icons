"use strict";

const { forwardRef } = require('react');

const AtSign5Minus = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M15.97473145002914,11.999999998583007l-4.000003679812835.000000001428816c-1.104569484942658.00000000039563-1.999999974060302.895430487169506-1.999999977342668,1.999999972112164l-.000000010255462,1.000000033558536c-.000000015926162,1.104569493999406.895430477295122,1.999999994311111,1.999999971234502,1.999999994413884l1.000002897061677.000000000094587c1.656853207139648.000000000152795,2.999998772555955-1.343143790682007,3.00000079910933-2.999996999721589l.000000000005457-.000002999999197" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.97473145002914" y1="22.00000000046839" x2="12.97473145002914" y2="22.000000000470209" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.974731450072795,10.00000000046839l-.000000000025466,5.999999999979991c-.000000000010914,3.313708498993947,2.686291501009691,6.000000000020009,6,6.000000000020009h2.000007999979971" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.97473145002914,14.000007981151612v-6.000007980683222c0-3.313708498983942-2.686291501015148-6-6-6h-3.999999999956344" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.97473145002914,13.999999981153451v1c0,1.104569499661011.89543050033808,2,2,2h1c1.104569499661011,0,2-.895430500338989,2-2v-1.000000000002728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.97473145002914,7.99999974549246l2.999996522077709.000000016759259c1.104569589188031-.000000001577064,2.000000131845809.895430629713701,2.000000020939297,2.000000218901732l-.000000602444743,5.000000342442945" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.974731450047329" y1="5.000000000459295" x2="1.974731450047329" y2="5.000000000459295" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AtSign5Minus.displayName = 'AtSign5Minus';

module.exports = AtSign5Minus;
module.exports.AtSign5Minus = AtSign5Minus;
module.exports.default = AtSign5Minus;
