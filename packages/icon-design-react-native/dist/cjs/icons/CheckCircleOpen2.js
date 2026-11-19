'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const CheckCircleOpen2 = forwardRef(function CheckCircleOpen2(
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
    createElement(Polyline, {"points":"8.949462885140747 11.000000000480213 11.949462885140747 14.000000000480213 19.949462885140747 6.000000000480213","key":"0"}),
    createElement(Path, {"d":"M18.514404291390747,7.435058594230213c-1.445373535150793-2.074645996090112-3.844787597650793-3.43505859375-6.56494140625-3.43505859375-4.41827392578125,0-8,3.58172607421875-8,8,0,4.418273925777612,3.58172607421875,8,8,8,4.418273925779431,0,8-3.581726074222388,8-8","key":"1"})
  );
});

CheckCircleOpen2.displayName = 'CheckCircleOpen2';

module.exports = CheckCircleOpen2;
module.exports.CheckCircleOpen2 = CheckCircleOpen2;
module.exports.default = CheckCircleOpen2;
