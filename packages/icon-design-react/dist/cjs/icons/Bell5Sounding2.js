'use strict';

const { createElement, forwardRef } = require('react');

const Bell5Sounding2 = forwardRef(function Bell5Sounding2(
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
    createElement('line', {"x1":"9.974731449503452","y1":"21.000000000480213","x2":"13.974731449503452","y2":"21.000000000480213","key":"0"}),
    createElement('line', {"x1":"18.974731449503452","y1":"17.000000000480213","x2":"4.974731449503452","y2":"17.000000000480213","key":"1"}),
    createElement('path', {"d":"M16.974731449503452,17.000000000480213v-7.000005000012607c0-2.761420987728343-2.238574012262688-4.999994999987393-4.999994999985574-4.999994999987393h-.000010000002476c-2.761420987718338,0-4.999994999981027,2.238574012259051-4.999994999988303,4.999994999969203l-.000000000023647,7.000005000030797","key":"2"}),
    createElement('line', {"x1":"17.974731449503452","y1":"3.000000000480213","x2":"20.974731449503452","y2":"7.000000000480213","key":"3"}),
    createElement('line', {"x1":"5.974731449503452","y1":"3.000000000549335","x2":"2.974731449323372","y2":"7.000000000411092","key":"4"})
  );
});

Bell5Sounding2.displayName = 'Bell5Sounding2';

module.exports = Bell5Sounding2;
module.exports.Bell5Sounding2 = Bell5Sounding2;
module.exports.default = Bell5Sounding2;
