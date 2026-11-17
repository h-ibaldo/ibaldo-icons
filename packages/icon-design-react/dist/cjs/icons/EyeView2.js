'use strict';

const { createElement, forwardRef } = require('react');

const EyeView2 = forwardRef(function EyeView2(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M12.025268548975873,5.997565475895499c-4.272705078119543,0-8.178466796869543,2.44097900390625-10,6,1.821533203130457,3.55902099609375,5.727294921880457,6,10,6,4.272705078130457,0,8.178466796880457-2.44097900390625,10-6-1.821533203119543-3.55902099609375-5.727294921869543-6-10-6Z","key":"0"}),
    createElement('circle', {"cx":"12.025268548975873","cy":"11.997565475895499","r":"5","key":"1"})
  );
});

EyeView2.displayName = 'EyeView2';

module.exports = EyeView2;
module.exports.EyeView2 = EyeView2;
module.exports.default = EyeView2;
