'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const CheckSquareOpen = forwardRef(function CheckSquareOpen(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Polyline, {"points":"19.949462885140747 6.000000000480213 11.949462885140747 14.000000000480213 8.949462885140747 11.000000000480213","key":"0"}),
    createElement(Path, {"d":"M14.949462885140747,5.000000000480213h-7c-1.656854249500611,0-3,1.343145750510303-3,3v8c0,1.656854249489697,1.343145750508484,3,3,3h8c1.656854249489697,0,3-1.343145750510303,3-3v-3","key":"1"})
  );
});

CheckSquareOpen.displayName = 'CheckSquareOpen';

module.exports = CheckSquareOpen;
module.exports.CheckSquareOpen = CheckSquareOpen;
module.exports.default = CheckSquareOpen;
