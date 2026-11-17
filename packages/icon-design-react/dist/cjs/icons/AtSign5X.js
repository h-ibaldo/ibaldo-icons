"use strict";

const { forwardRef } = require('react');

const AtSign5X = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M15.974731450047329,11.999999998583007l-4.000003679811925.000000001428816c-1.104569484943568.00000000039563-1.999999974061211.895430487169506-1.999999977342668,1.999999972112164l-.000000010255462,1.000000033558536c-.000000015927071,1.104569493999406.895430477292393,1.999999994311111,1.999999971234502,1.999999994413884l1.000002897059858.000000000094587c1.656853207140557.000000000152795,2.999998772557774-1.343143790682007,3.000000799112058-2.999996999721589l.000000000003638-.000002999999197" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.974731450047329" y1="22.00000000046839" x2="12.974731450047329" y2="22.000000000470209" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.974731450090985,10.00000000046839l-.000000000027285,5.999999999979991c-.000000000010004,3.313708498993947,2.686291501010601,6.000000000020009,6,6.000000000020009h2.000007999982699" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.974731450047329,14.000007981151612v-6.000007980683222c0-3.313708498983942-2.686291501015148-6-6-6h-3.999999999956344" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.974731450047329,13.999999981153451v1c0,1.104569499661011.895430500338989,2,2,2h1c1.104569499661011,0,2-.895430500338989,2-2v-1.000000000002728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.974731450047329,7.99999974549246l2.99999652207589.000000016759259c1.104569589188941-.000000001577064,2.000000131849447.895430629713701,2.000000020941116,2.000000218901732l-.000000602445652,5.000000342442945" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.974731450047329" y1="2.00000000046839" x2="6.974731450047329" y2="6.00000000046839" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.974731450047329" y1="2.00000000046839" x2="2.974731450047329" y2="6.00000000046839" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

AtSign5X.displayName = 'AtSign5X';

module.exports = AtSign5X;
module.exports.AtSign5X = AtSign5X;
module.exports.default = AtSign5X;
