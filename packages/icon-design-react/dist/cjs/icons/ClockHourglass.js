'use strict';

const { createElement, forwardRef } = require('react');

const ClockHourglass = forwardRef(function ClockHourglass(
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
    createElement('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"0"}),
    createElement('path', {"d":"M5,17.999999999887223s-3-1-3-4h6c0,3-3,4-3,4Z","key":"1"}),
    createElement('path', {"d":"M5,17.999999999887223s3,1,3,4H2c0-3,3-4,3-4Z","key":"2"}),
    createElement('path', {"d":"M12,21.999999999887223c5.522888183590112,0,10-4.477172851558862,10-10,0-5.522827148439319-4.477111816409888-10-10-10C7.162170410159888,1.999999999887223,3.127502441409888,5.435546874887223,2.200866699220569,9.999999999887223","key":"3"})
  );
});

ClockHourglass.displayName = 'ClockHourglass';

module.exports = ClockHourglass;
module.exports.ClockHourglass = ClockHourglass;
module.exports.default = ClockHourglass;
