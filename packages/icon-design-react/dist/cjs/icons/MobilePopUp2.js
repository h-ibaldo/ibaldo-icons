"use strict";

const { forwardRef } = require('react');

const MobilePopUp2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M19,13.998779303362426h-5l-3,2v-2h-2c-1.104569499659192,0-2-.895430500338989-2-2v-1c0-1.104569499661011.895430500340808-2,2-2h10c1.104569499670106,0,2,.895430500338989,2,2v1c0,1.104569499661011-.895430500329894,2-2,2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17,16.998779303362426v3c0,1.104569499661011-.895430500329894,2-2,2H5c-1.104569499659192,0-2-.895430500338989-2-2V3.998779303362426c0-1.104569499661011.895430500340808-2,2-2h10c1.104569499670106,0,2,.895430500338989,2,2v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3" y1="4.998779303362426" x2="17" y2="4.998779303362426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="3" y1="18.998779303362426" x2="17" y2="18.998779303362426" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

MobilePopUp2.displayName = 'MobilePopUp2';

module.exports = MobilePopUp2;
module.exports.MobilePopUp2 = MobilePopUp2;
module.exports.default = MobilePopUp2;
