'use strict';

const { createElement, forwardRef } = require('react');

const ClockPin = forwardRef(function ClockPin(
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
    createElement('line', {"x1":"6","y1":"16.009999999909269","x2":"6","y2":"15.999999999909051","key":"0"}),
    createElement('path', {"d":"M5.99999999981992,11.999999999998181c2.20913899920015-.000000000100044,4.000000000080036,1.79086100061977,4.00000000018008,3.99999999981992.000000000130058,3-3.99999999972988,6.00000000018008-3.99999999972988,6.00000000018008,0,0-4.00000000027012-3.00000000008913-4.00000000027012-6.00000000008913,0-2.209138999201969,1.79086100079985-4,4-4","key":"1"}),
    createElement('polyline', {"points":"15 6.079589843659051 15 9.079589843659051 18 9.079589843659051","key":"2"}),
    createElement('path', {"d":"M14,15.920410156159051c.327453613280341.047119140619543.659545898440228.07958984375,1,.07958984375,3.865966796869543,0,7-3.134033203130457,7-7,0-3.865966796880457-3.134033203130457-7-7-7-3.525512695309772,0-6.43408203125,2.609008789058862-6.920471191409888,6","key":"3"})
  );
});

ClockPin.displayName = 'ClockPin';

module.exports = ClockPin;
module.exports.ClockPin = ClockPin;
module.exports.default = ClockPin;
