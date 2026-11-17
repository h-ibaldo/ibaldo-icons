'use strict';

const { createElement, forwardRef } = require('react');

const EyePupil = forwardRef(function EyePupil(
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
    createElement('circle', {"cx":"12.075805662938819","cy":"11.997565472716815","r":".999999999995225","key":"0"}),
    createElement('circle', {"cx":"12.075805662938819","cy":"11.997565472716815","r":"4.999999999995225","key":"1"}),
    createElement('path', {"d":"M12.075805662936546,3.997565472719543C7.237915037936546,3.997565472719543,4.075805662936546,7.997565472719543,2.075805662945641,11.997565472719543","key":"2"}),
    createElement('path', {"d":"M12.075805662765561,3.997565472945098c4.837890625-.000000000218279,8.000000000170985,3.999999999774445,10.000000000351065,7.999999999548891","key":"3"}),
    createElement('path', {"d":"M12.075805662756466,19.997565472719543c4.837890625.000000000432919,8.00000000018008-4,10.000000000718501-7.999999999105057","key":"4"}),
    createElement('path', {"d":"M12.075805662936546,19.997565472493989c-4.837890625-.000000000218279-8-3.999999999774445-9.99999999963984-8.000000000451109","key":"5"})
  );
});

EyePupil.displayName = 'EyePupil';

module.exports = EyePupil;
module.exports.EyePupil = EyePupil;
module.exports.default = EyePupil;
