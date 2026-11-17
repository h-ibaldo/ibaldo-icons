'use strict';

const { createElement, forwardRef } = require('react');

const ArrowClockwiseXCircle = forwardRef(function ArrowClockwiseXCircle(
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
    createElement('polyline', {"points":"19.000000000029104 1.999999999979991 19.000000000029104 5.999999999979991 15.000000000029104 5.999999999979991","key":"0"}),
    createElement('circle', {"cx":"16.000000000029104","cy":"15.999999999979991","r":"6","key":"1"}),
    createElement('path', {"d":"M19.000000000029104,5.999999999979991v-.31646728515625c-1.738037109369543-2.23779296875-4.447204589840112-3.68353271484375-7.5-3.68353271484375C6.253295898470242,1.999999999979991,2.000000000029104,6.253295898417491,2.000000000029104,11.499999999979991s4.253295898441138,9.5,9.5,9.5c.365905761720569,0,.722900390630457-.0347900390625,1.078002929691138-.0750732421875","key":"2"}),
    createElement('line', {"x1":"18.000000000029104","y1":"13.999999999979991","x2":"14.000000000029104","y2":"17.999999999979991","key":"3"}),
    createElement('line', {"x1":"18.000000000029104","y1":"17.999999999979991","x2":"14.000000000029104","y2":"13.999999999979991","key":"4"})
  );
});

ArrowClockwiseXCircle.displayName = 'ArrowClockwiseXCircle';

module.exports = ArrowClockwiseXCircle;
module.exports.ArrowClockwiseXCircle = ArrowClockwiseXCircle;
module.exports.default = ArrowClockwiseXCircle;
