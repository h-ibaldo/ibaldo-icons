"use strict";

const { forwardRef } = require('react');

const EyeViewVisualize3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M12.025268548975873,5.997565475895499c-4.272705078119543,0-8.178466796869543,2.44097900390625-10,6,1.821533203130457,3.55902099609375,5.727294921880457,6,10,6,4.272705078130457,0,8.178466796880457-2.44097900390625,10-6-1.821533203119543-3.55902099609375-5.727294921869543-6-10-6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.470581048975873,6.954901901676749c-.281005859369543.62493896484375-.4453125,1.3131103515625-.4453125,2.04266357421875,0,2.76141357421875,2.238525390630457,5,5,5,2.761474609380457,0,5-2.23858642578125,5-5,0-.72955322265625-.164306640619543-1.417724609375-.4453125-2.04266357421875" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

EyeViewVisualize3.displayName = 'EyeViewVisualize3';

module.exports = EyeViewVisualize3;
module.exports.EyeViewVisualize3 = EyeViewVisualize3;
module.exports.default = EyeViewVisualize3;
