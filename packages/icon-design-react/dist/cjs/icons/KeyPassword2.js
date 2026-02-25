"use strict";

const { forwardRef } = require('react');

const KeyPassword2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M8.500019575949409,9.500015258789062l3.244873046871362,3.244934082029431c-.470825195319776.810791015619543-.744873046871362,1.749938964840112-.744873046871362,2.755065917970569,0,3.037536621090112,2.46240234375,5.5,5.5,5.5s5.5-2.462463378909888,5.5-5.5c0-3.037536621101026-2.46240234375-5.5-5.5-5.5-1.005126953128638,0-1.9443359375.274047851558862-2.755126953128638.744934082029431L6.000019575949409,3.000015258789062c-.55224609375-.552307128909888-1.44775390625-.552307128909888-2,0s-.55224609375,1.447692871090112,0,2l.5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.500019575949409,5.500015258789062l-1.792893218809695,1.792893218807876c-.390524291758993.390524291749898-.390524291758993,1.023689270621617,0,1.41421356238061l2.585786437621209,2.58578643761939c.390524291749898.390524291749898,1.023689270619798.390524291749898,1.414213562378791,0l1.792893218809695-1.792893218807876" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.000019575949409" y1="17.000015258789062" x2="18.000019575949409" y2="16.000015258789062" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

KeyPassword2.displayName = 'KeyPassword2';

module.exports = KeyPassword2;
module.exports.KeyPassword2 = KeyPassword2;
module.exports.default = KeyPassword2;
