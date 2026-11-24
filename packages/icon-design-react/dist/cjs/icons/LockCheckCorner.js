'use strict';

const { createElement, forwardRef } = require('react');

const LockCheckCorner = forwardRef(function LockCheckCorner(
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
    createElement('path', {"d":"M10.949462885141656,22.000000000480213H3.949462885141656c-.552284749831415,0-1-.447715250171314-1-1v-10c0-.552284749832324.447715250168585-1,1-1h14c.552284749829596,0,1,.447715250167676,1,1v3","key":"0"}),
    createElement('path', {"d":"M15.949462885141656,10.000000000480213v-3.000005000001693c0-2.761420987728343-2.238574012270874-4.999994999998307-4.999994999999217-4.999994999998307h-.000010000000657c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999994999998307v3.000005000001693","key":"1"}),
    createElement('polyline', {"points":"13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213","key":"2"})
  );
});

LockCheckCorner.displayName = 'LockCheckCorner';

module.exports = LockCheckCorner;
module.exports.LockCheckCorner = LockCheckCorner;
module.exports.default = LockCheckCorner;
