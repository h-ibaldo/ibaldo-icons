'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { G, Line, Polyline } = RNSvg;

const BoltOff = forwardRef(function BoltOff(
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
    createElement(Line, {"x1":"2.999999976489562","y1":"2.998779299956368","x2":"20.999999976489562","y2":"20.998779299956368","key":"0"}),
    createElement(G, {"key":"1"},
      createElement(Polyline, {"points":"15.400024390559338 15.398803714018868 18.999999976489562 9.998779299956368 12.999999976489562 9.998779299956368 12.999999976489562 1.998779299956368 8.599975562428881 8.598754885893868","key":"0"}),
      createElement(Polyline, {"points":"10.999999976489562 15.998779299956368 10.999999976489562 21.998840335112618 13.400024390559338 18.398803714018868","key":"1"}),
      createElement(Polyline, {"points":"6.599975562428881 11.598754885893868 4.999999976489562 13.998779299956368 8.999999976489562 13.998779299956368","key":"2"}))
  );
});

BoltOff.displayName = 'BoltOff';

module.exports = BoltOff;
module.exports.BoltOff = BoltOff;
module.exports.default = BoltOff;
