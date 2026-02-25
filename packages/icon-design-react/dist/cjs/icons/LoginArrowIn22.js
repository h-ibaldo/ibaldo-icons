"use strict";

const { forwardRef } = require('react');

const LoginArrowIn22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="13.974731449592582 17.000000000347427 8.974731450040053 11.999999999895408 13.974731450491163 7.000000000347427" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="21.974731450043691" y1="12.000000001063199" x2="8.974731450040053" y2="11.999999999895408" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.974731450043691,22.000000000481123H4.974731450043691c-1.656854249488788,0-3-1.343145750508484-3-3V5.000000000481123c0-1.656854249493335,1.343145750511212-3,3-3h8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

LoginArrowIn22.displayName = 'LoginArrowIn22';

module.exports = LoginArrowIn22;
module.exports.LoginArrowIn22 = LoginArrowIn22;
module.exports.default = LoginArrowIn22;
