'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Polyline, Rect } = RNSvg;

const ARSquare = forwardRef(function ARSquare(
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
    createElement(Polyline, {"points":"9.999999977098923 16.999996563434252 9.999999977098923 6.999996563434252 5.999999977098923 6.999996563434252 5.999999977098923 16.999996563434252","key":"0"}),
    createElement(Line, {"x1":"5.999999977098923","y1":"12.999996563434252","x2":"9.999999977098923","y2":"12.999996563434252","key":"1"}),
    createElement(Polyline, {"points":"13.999999977098923 11.999996563434252 17.999999977098923 14.999996563434252 17.999999977098923 16.999996563434252","key":"2"}),
    createElement(Polyline, {"points":"13.999999977098923 16.999996563434252 13.999999977098923 6.999996563434252 17.999999977098923 6.999996563434252 17.999999977098923 11.999996563434252 13.999999977098923 11.999996563434252","key":"3"}),
    createElement(Rect, {"x":"1.999999977098923","y":"2.999996563434252","width":"20","height":"18","rx":"2","ry":"2","key":"4"})
  );
});

ARSquare.displayName = 'ARSquare';

module.exports = ARSquare;
module.exports.ARSquare = ARSquare;
module.exports.default = ARSquare;
