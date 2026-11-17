'use strict';

const { createElement, forwardRef } = require('react');

const ArrowSyncClockwiseOff2 = forwardRef(function ArrowSyncClockwiseOff2(
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
    createElement('polyline', {"points":"22 8.999999999858119 19.000000000130967 12 16 9.000000000129148","key":"0"}),
    createElement('line', {"x1":"4.920471191719116","y1":"1.914213555017341","x2":"18.920471191719116","y2":"21.914213555017341","key":"1"}),
    createElement('path', {"d":"M19,12v-3c0-3.865966796869543-3.13397216796875-7-7-7-.81439208984375,0-1.59326171875.144653320319776-2.319580078125.400634765630457","key":"2"}),
    createElement('path', {"d":"M6.626708984687866,4.351713555017341c-.84930419921875.987426757819776-1.43280029296875,2.210693359380457-1.626708984375,3.5625","key":"3"}),
    createElement('polyline', {"points":"2 14.999999999870852 5.000000000138243 12 8 15.000000000140062","key":"4"}),
    createElement('path', {"d":"M5.000000000403816,12.000000000140062l-.00000000026921,3c-.000000000347427,3.865966796880457,3.13397216733938,7.000000000291038,6.99999999937063,7.00000000062937.81439208984375.000000000080036,1.593261718764552-.144653320170619,2.31958007816138-.400634765410359","key":"5"}),
    createElement('path', {"d":"M17.293762207025793,19.476713555777678c.84930419930788-.98742675773974,1.43280029316702-2.21069335924949,1.626708984693323-3.562499999859938","key":"6"})
  );
});

ArrowSyncClockwiseOff2.displayName = 'ArrowSyncClockwiseOff2';

module.exports = ArrowSyncClockwiseOff2;
module.exports.ArrowSyncClockwiseOff2 = ArrowSyncClockwiseOff2;
module.exports.default = ArrowSyncClockwiseOff2;
