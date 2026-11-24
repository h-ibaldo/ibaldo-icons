'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Polyline } = RNSvg;

const UploadSquareNotch = forwardRef(function UploadSquareNotch(
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
    createElement(Polyline, {"points":"15.000000005029506 13.000000026766429 11.999999978339474 10.000000000462023 9.000000005029506 13.000000026766429","key":"0"}),
    createElement(Line, {"x1":"11.999999978339474","y1":"17.000000026767339","x2":"11.999999978339474","y2":"10.000000000462023","key":"1"}),
    createElement(Path, {"d":"M15.000000005029506,2.000000000459295c0,1.6568603515625-1.343139648430224,3-3,3-1.656860351558862,0-3-1.3431396484375-3-3H3.000000005029506c-.552284749830505,0-1,.447715250171314-1,1v18c0,.552284749832324.447715250169495,1,1,1h18c.552284749841419,0,1-.447715250167676,1-1V3.000000000459295c0-.552284749828686-.447715250158581-1-1-1h-6Z","key":"2"})
  );
});

UploadSquareNotch.displayName = 'UploadSquareNotch';

module.exports = UploadSquareNotch;
module.exports.UploadSquareNotch = UploadSquareNotch;
module.exports.default = UploadSquareNotch;
