'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const BellCheckFlat = forwardRef(function BellCheckFlat(
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
    createElement(Path, {"d":"M13.974731449499814,17.000000000480213v2.000002000000677c0,1.104568395086972-.895429604909623,1.999997999999323-1.999997999999323,1.999997999999323h-.000004000000445c-1.1045683950897,0-1.999998000000232-.895429604912351-1.999998000000232-1.999997999999323v-2.000002000000677","key":"0"}),
    createElement(Line, {"x1":"19.974731449499814","y1":"17.000000000480213","x2":"3.974731449499814","y2":"17.000000000480213","key":"1"}),
    createElement(Path, {"d":"M17.974731449499814,17.000000000480213v-7.000006000002031c0-3.313705185279105-2.686288814719774-5.999993999997969-5.999993999999788-5.999993999997969h-.000012000000424c-3.313705185279105,0-5.999993999999788,2.686288814718864-5.999993999999788,5.999993999997969v7.000006000002031","key":"2"}),
    createElement(Line, {"x1":"11.974731449499814","y1":"2.000000000480213","x2":"11.974731449499814","y2":"4.000000000480213","key":"3"}),
    createElement(Polyline, {"points":"9.974731449499814 11.000000000480213 11.474731449499814 12.500000000480213 13.974731449499814 10.000000000480213","key":"4"})
  );
});

BellCheckFlat.displayName = 'BellCheckFlat';

module.exports = BellCheckFlat;
module.exports.BellCheckFlat = BellCheckFlat;
module.exports.default = BellCheckFlat;
