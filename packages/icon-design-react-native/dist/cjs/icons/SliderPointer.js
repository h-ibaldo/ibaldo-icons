'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polygon } = RNSvg;

const SliderPointer = forwardRef(function SliderPointer(
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
    createElement(Polygon, {"points":"11.999999977098923 15.999996563434252 8.999999977098923 18.999996563434252 5.999999977098923 15.999996563434252 5.999999977098923 5.999996563434252 11.999999977098923 5.999996563434252 11.999999977098923 15.999996563434252","key":"0"}),
    createElement(Line, {"x1":"21.999999977098923","y1":"11.999996563434252","x2":"11.999999977098923","y2":"11.999996563434252","key":"1"}),
    createElement(Line, {"x1":"5.999999977098923","y1":"11.999996563434252","x2":"1.999999977098923","y2":"11.999996563434252","key":"2"})
  );
});

SliderPointer.displayName = 'SliderPointer';

module.exports = SliderPointer;
module.exports.SliderPointer = SliderPointer;
module.exports.default = SliderPointer;
