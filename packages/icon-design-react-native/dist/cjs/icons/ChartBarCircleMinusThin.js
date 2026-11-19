'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const ChartBarCircleMinusThin = forwardRef(function ChartBarCircleMinusThin(
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
    createElement(Line, {"x1":"7.999999999959982","y1":"15","x2":"7.999999999959982","y2":"12","key":"0"}),
    createElement(Line, {"x1":"11.999999999959982","y1":"15","x2":"11.999999999959982","y2":"9","key":"1"}),
    createElement(Line, {"x1":"15.999999999959982","y1":"15","x2":"15.999999999959982","y2":"11","key":"2"}),
    createElement(Line, {"x1":"17","y1":"5.000000000090949","x2":"21.999999999909051","y2":"5","key":"3"}),
    createElement(Path, {"d":"M13,2.05047607421875c-.328857421869543-.03289794921875-.662353515619543-.05047607421875-1-.05047607421875C6.47705078125,2,2,6.4771728515625,2,12c0,5.52294921875,4.47705078125,10,10,10s10-4.47705078125,10-10c0-.68505859375-.069580078119543-1.353759765625-.200927734369543-2","key":"4"})
  );
});

ChartBarCircleMinusThin.displayName = 'ChartBarCircleMinusThin';

module.exports = ChartBarCircleMinusThin;
module.exports.ChartBarCircleMinusThin = ChartBarCircleMinusThin;
module.exports.default = ChartBarCircleMinusThin;
