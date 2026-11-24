'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const ArrowSyncCounterclockwiseRotated = forwardRef(function ArrowSyncCounterclockwiseRotated(
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
    createElement(Polyline, {"points":"13.0000000004502 2.000000000090949 11.00000000036016 4 13.00000000027012 6.000000000090949","key":"0"}),
    createElement(Polyline, {"points":"10.99999999972988 22 12.99999999963984 19.999999999909051 10.9999999995498 18","key":"1"}),
    createElement(Path, {"d":"M7.22419387580976,5.581312473750586c-1.956869189530153,1.458376179860352-3.224193875689707,3.790532082708523-3.22419387580976,6.418687525940186-.000000000200089,4.418277998400299,3.581722001239541,8.000000000160071,7.99999999963984,8.00000000036016","key":"2"}),
    createElement(Path, {"d":"M16.775806124760493,18.418687525911082c1.956869189399185-1.458376180031337,3.22419387535956-3.790532082999562,3.224193875239507-6.41868752622031-.000000000200089-4.41827799839939-3.581722001959861-7.999999999839929-8.00000000036016-7.99999999963984","key":"3"})
  );
});

ArrowSyncCounterclockwiseRotated.displayName = 'ArrowSyncCounterclockwiseRotated';

module.exports = ArrowSyncCounterclockwiseRotated;
module.exports.ArrowSyncCounterclockwiseRotated = ArrowSyncCounterclockwiseRotated;
module.exports.default = ArrowSyncCounterclockwiseRotated;
