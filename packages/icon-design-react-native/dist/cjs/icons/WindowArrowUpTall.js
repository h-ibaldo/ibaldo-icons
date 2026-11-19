'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const WindowArrowUpTall = forwardRef(function WindowArrowUpTall(
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
    createElement(Path, {"d":"M7.999999993642632,21.998779299956368h-1c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h10c1.656854249500611,0,3,1.343145750506665,3,3v14c0,1.656854249489697-1.343145750499389,3-3,3h-1","key":"0"}),
    createElement(Line, {"x1":"3.999999993642632","y1":"6.998779299956368","x2":"19.999999993642632","y2":"6.998779299956368","key":"1"}),
    createElement(Polyline, {"points":"8.999999993642632 15.998779299956368 11.999999993642632 12.998779299956368 14.999999993642632 15.998779299956368","key":"2"}),
    createElement(Line, {"x1":"11.999999993642632","y1":"12.998779299956368","x2":"11.999999993642632","y2":"21.998779299956368","key":"3"})
  );
});

WindowArrowUpTall.displayName = 'WindowArrowUpTall';

module.exports = WindowArrowUpTall;
module.exports.WindowArrowUpTall = WindowArrowUpTall;
module.exports.default = WindowArrowUpTall;
