'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const BellCheckDash = forwardRef(function BellCheckDash(
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
    createElement(Line, {"x1":"19.974731449499814","y1":"17.000000000480213","x2":"3.974731449499814","y2":"17.000000000480213","key":"0"}),
    createElement(Path, {"d":"M17.974731449499814,17.000000000480213v-8.000006000002031c0-3.313705185279105-2.686288814719774-5.999993999997969-5.999993999999788-5.999993999997969h-.000012000000424c-3.313705185279105,0-5.999993999999788,2.686288814718864-5.999993999999788,5.999993999997969v8.000006000002031","key":"1"}),
    createElement(Line, {"x1":"9.974731449499814","y1":"21.000000000480213","x2":"13.974731449499814","y2":"21.000000000480213","key":"2"}),
    createElement(Polyline, {"points":"9.974731449499814 10.000000000480213 11.474731449499814 11.500000000480213 13.974731449499814 9.000000000480213","key":"3"})
  );
});

BellCheckDash.displayName = 'BellCheckDash';

module.exports = BellCheckDash;
module.exports.BellCheckDash = BellCheckDash;
module.exports.default = BellCheckDash;
