"use strict";

const { forwardRef } = require('react');

const LoginArrowIn32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="11.974731450043691 15.000000000481123 8.974731450043691 12.000000000479304 11.974731450043691 9.000000000481123" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731450043691" y1="12.000000000481123" x2="8.974731450043691" y2="12.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.254028325043691,6.000000000479304c-1.409423828117724-1.241149902342841-3.253662109367724-2-5.279296875-2C5.556457524266079,4.000000000479304,1.974731450043691,7.581726074698963,1.974731450043691,12.000000000479304c0,4.418273925782159,3.581726074222388,8,8,8,2.025634765632276,0,3.869873046882276-.758850097655341,5.279296875-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LoginArrowIn32.displayName = 'LoginArrowIn32';

module.exports = LoginArrowIn32;
module.exports.LoginArrowIn32 = LoginArrowIn32;
module.exports.default = LoginArrowIn32;
