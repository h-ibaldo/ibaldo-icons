'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const ArrowClockwiseX = forwardRef(function ArrowClockwiseX(
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
    createElement(Polyline, {"points":"20.000000000029104 1.999999999979991 20.000000000029104 5.999999999979991 16.000000000029104 5.999999999979991","key":"0"}),
    createElement(Path, {"d":"M19.986389160188992,5.999999999979991c-1.82470703125-2.42486572265625-4.71795654296875-4-7.986389160159888-4C6.477172851589785,1.999999999979991,2.000000000029104,6.477111816386241,2.000000000029104,11.999999999979991c0,5.5228271484375,4.477172851560681,10,10,10,4.837829589840112,0,8.872497558590112-3.43560791015625,9.79913330078125-8","key":"1"}),
    createElement(Line, {"x1":"15.000000000029104","y1":"8.999999999979991","x2":"9.000000000029104","y2":"14.999999999979991","key":"2"}),
    createElement(Line, {"x1":"9.000000000029104","y1":"8.999999999979991","x2":"15.000000000029104","y2":"14.999999999979991","key":"3"})
  );
});

ArrowClockwiseX.displayName = 'ArrowClockwiseX';

module.exports = ArrowClockwiseX;
module.exports.ArrowClockwiseX = ArrowClockwiseX;
module.exports.default = ArrowClockwiseX;
