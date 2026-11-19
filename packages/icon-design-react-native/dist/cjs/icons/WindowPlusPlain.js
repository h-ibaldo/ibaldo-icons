'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const WindowPlusPlain = forwardRef(function WindowPlusPlain(
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
    createElement(Path, {"d":"M10.999999993642632,21.998779299956368h-6c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249491516,0,3,1.343145750506665,3,3v6","key":"0"}),
    createElement(Line, {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368","key":"1"}),
    createElement(Line, {"x1":"17.999999993642632","y1":"13.998779299956368","x2":"17.999999993642632","y2":"21.998779299956368","key":"2"}),
    createElement(Line, {"x1":"21.999999993642632","y1":"17.998779299956368","x2":"13.999999993642632","y2":"17.998779299956368","key":"3"})
  );
});

WindowPlusPlain.displayName = 'WindowPlusPlain';

module.exports = WindowPlusPlain;
module.exports.WindowPlusPlain = WindowPlusPlain;
module.exports.default = WindowPlusPlain;
