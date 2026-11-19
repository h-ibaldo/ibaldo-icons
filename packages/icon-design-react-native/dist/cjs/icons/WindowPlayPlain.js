'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polygon } = RNSvg;

const WindowPlayPlain = forwardRef(function WindowPlayPlain(
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
    createElement(Path, {"d":"M12.025268549803513,21.998779300087335h-7c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779300087335c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v8","key":"0"}),
    createElement(Line, {"x1":"2.025268549803513","y1":"7.998779300087335","x2":"22.025268549803513","y2":"7.998779300087335","key":"1"}),
    createElement(Polygon, {"points":"16.025268549803513 13.998779300087335 16.025268549803513 21.998779300087335 22.025268549803513 17.998779300087335 16.025268549803513 13.998779300087335","key":"2"})
  );
});

WindowPlayPlain.displayName = 'WindowPlayPlain';

module.exports = WindowPlayPlain;
module.exports.WindowPlayPlain = WindowPlayPlain;
module.exports.default = WindowPlayPlain;
