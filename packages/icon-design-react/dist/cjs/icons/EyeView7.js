"use strict";

const { forwardRef } = require('react');

const EyeView7 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M12.025268539455283,5.997562040162848c-4.272705078119543,0-8.178466796869543,2.44097900390625-10,6,1.821533203130457,3.559020996094659,5.727294921880457,6,10,6,4.272705078130457,0,8.178466796880457-2.440979003905341,10-6-1.821533203119543-3.55902099609375-5.727294921869543-6-10-6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.025268539455283,8.997562040162848c-1.656854249398748,0-3,1.343145750601252-3,3,0,1.656854249399657,1.343145750601252,3,3,3,1.656854249400567,0,3-1.343145750600343,3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

EyeView7.displayName = 'EyeView7';

module.exports = EyeView7;
module.exports.EyeView7 = EyeView7;
module.exports.default = EyeView7;
