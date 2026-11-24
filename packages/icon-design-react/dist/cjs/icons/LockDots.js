'use strict';

const { createElement, forwardRef } = require('react');

const LockDots = forwardRef(function LockDots(
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
    createElement('rect', {"x":"3.949462885142566","y":"10.000000000480213","width":"16.000000000001819","height":"12","rx":"1","ry":"1","key":"0"}),
    createElement('path', {"d":"M16.949462885144385,10.000000000480213v-3.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999994999999217-4.999994999998307h-.000010000001566c-2.761420987731981,0-4.999994999999217,2.238574012269964-4.999994999999217,4.999994999998307v3.000005000001693","key":"1"}),
    createElement('line', {"x1":"7.949462885142566","y1":"15.990000000479995","x2":"7.949462885142566","y2":"16.000000000480213","key":"2"}),
    createElement('line', {"x1":"11.949462885142566","y1":"15.990000000479995","x2":"11.949462885142566","y2":"16.000000000480213","key":"3"}),
    createElement('line', {"x1":"15.949462885142566","y1":"15.990000000479995","x2":"15.949462885142566","y2":"16.000000000480213","key":"4"})
  );
});

LockDots.displayName = 'LockDots';

module.exports = LockDots;
module.exports.LockDots = LockDots;
module.exports.default = LockDots;
