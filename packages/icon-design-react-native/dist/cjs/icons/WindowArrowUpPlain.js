'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const WindowArrowUpPlain = forwardRef(function WindowArrowUpPlain(
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
    createElement(Path, {"d":"M6,18h-1c-1.656854249489697,0-3-1.343145750510303-3-3V5c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v10c0,1.656854249489697-1.343145750510303,3-3,3h-1","key":"0"}),
    createElement(Line, {"x1":"2","y1":"8","x2":"22","y2":"8","key":"1"}),
    createElement(Polyline, {"points":"9 15 12 12 15 15","key":"2"}),
    createElement(Path, {"d":"M12,12v6c0,2.209138999322022-1.790861000679797,4-4,4h-1","key":"3"})
  );
});

WindowArrowUpPlain.displayName = 'WindowArrowUpPlain';

module.exports = WindowArrowUpPlain;
module.exports.WindowArrowUpPlain = WindowArrowUpPlain;
module.exports.default = WindowArrowUpPlain;
