'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path, Polyline } = RNSvg;

const ArrowClockwiseBottom = forwardRef(function ArrowClockwiseBottom(
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
    createElement(Polyline, {"points":"4 22.000000000320142 4.000000000130058 18 8.000000000440195 18.000000000138243","key":"0"}),
    createElement(Path, {"d":"M2.050476074219659,13c-.032653808600116-.328979492191138-.050476074219659-.66241455078125-.050476074219659-1C2,6.477172851558862,6.477172851559772,2,12,2c5.522827148430224,0,10,4.477172851558862,10,10,0,5.522827148439319-4.477172851569776,10-10,10-3.268432617190228,0-6.16162109375-1.5751953125-7.986389160159888-4","key":"1"})
  );
});

ArrowClockwiseBottom.displayName = 'ArrowClockwiseBottom';

module.exports = ArrowClockwiseBottom;
module.exports.ArrowClockwiseBottom = ArrowClockwiseBottom;
module.exports.default = ArrowClockwiseBottom;
