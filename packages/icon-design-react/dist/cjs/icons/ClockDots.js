'use strict';

const { createElement, forwardRef } = require('react');

const ClockDots = forwardRef(function ClockDots(
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
    createElement('line', {"x1":"2.010000000000218","y1":"13.999999999887223","x2":"2","y2":"13.999999999887223","key":"1"}),
    createElement('line', {"x1":"2.010000000000218","y1":"17.999999999887223","x2":"2","y2":"17.999999999887223","key":"2"}),
    createElement('line', {"x1":"2.010000000000218","y1":"21.999999999887223","x2":"2","y2":"21.999999999887223","key":"3"}),
    createElement('path', {"d":"M7,20.651245117078361c1.472045898439319.85272216796875,3.176391601560681,1.348754882808862,5,1.348754882808862,5.522827148439319,0,10-4.477172851558862,10-10,0-5.522888183590112-4.477172851560681-10-10-10C7.522583007810681,1.999999999887223,3.733703613279431,4.943115234258585,2.459228515619543,8.999999999887223","key":"4"})
  );
});

ClockDots.displayName = 'ClockDots';

module.exports = ClockDots;
module.exports.ClockDots = ClockDots;
module.exports.default = ClockDots;
