'use strict';

const { createElement, forwardRef } = require('react');

const CheckCircleOpen = forwardRef(function CheckCircleOpen(
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
    createElement('polyline', {"points":"8.949462885140747 11.000000000480213 11.949462885140747 14.000000000480213 19.949462885140747 6.000000000480213","key":"0"}),
    createElement('path', {"d":"M15.237121576550635,4.712341309070325c-1.003784179691138-.453674316402612-2.114501953130457-.712341308590112-3.287658691409888-.712341308590112-4.41827392578125,0-8,3.58172607421875-8,8,0,4.418273925777612,3.58172607421875,8,8,8,4.418273925779431,0,8-3.581726074222388,8-8","key":"1"})
  );
});

CheckCircleOpen.displayName = 'CheckCircleOpen';

module.exports = CheckCircleOpen;
module.exports.CheckCircleOpen = CheckCircleOpen;
module.exports.default = CheckCircleOpen;
