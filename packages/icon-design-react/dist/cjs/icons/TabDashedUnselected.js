"use strict";

const { forwardRef } = require('react');

const TabDashedUnselected = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="22.050537104500108" y1="18.960578172601345" x2="22.050537104500108" y2="16.943915574945095" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="17.930908198250108 21.996283739007595 17.931152338869651 21.997565477288845 20.050537104500108 21.997565477288845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="11.884033198250108 21.927191942132595 11.906982417000108 21.997565477288845 13.981201167000108 21.997565477288845 13.991821284180332 21.961737840570095" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="5.664306635750108 21.927191942132595 5.692993159180332 21.997565477288845 7.840942377930332 21.997565477288845 7.84118651855988 21.996283739007595" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.07067870605988,18.575446336663845l-.020141601559772.0069580078125v1.4151611328125c0,.26800537109375.0546875.522705078125.150268554680224.75628662109375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.050537104500108" y1="12.493293016351345" x2="2.050537104500108" y2="14.603888719476345" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.050537104500108" y1="6.436469285882595" x2="2.050537104500108" y2="8.495368211663845" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.497070307619651,1.997565477288845h-.446533203119543c-.511962890630457,0-.97412109375.19818115234375-1.327880859380457.5146484375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.170654292000108,3.399909227288845l.0009765625-.00103759765625-.220336914069776-.275390625c-.353637695310681-.44189453125-.826538085930224-.7518310546875-1.347534179680224-.9364013671875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M14.80944823730988,7.001349656976345l.001098632809772-.0037841796875h-.318115234369543c-.575073242190228,0-1.12109375-.180908203125-1.595703125-.4814453125l-.064208984380457.05462646484375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.883911127930332,7.184516160882595c-.25439453125-.1171875-.535034179680224-.18695068359375-.833374023430224-.18695068359375h-1.21923828125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="22.031738276369651 12.834052293695095 22.050537104500108 12.830329149163845 22.050537104500108 10.804999559320095 22.031738276369651 10.798468797601345" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TabDashedUnselected.displayName = 'TabDashedUnselected';

module.exports = TabDashedUnselected;
module.exports.TabDashedUnselected = TabDashedUnselected;
module.exports.default = TabDashedUnselected;
