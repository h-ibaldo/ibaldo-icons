'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const WindowXCirclePlain = forwardRef(function WindowXCirclePlain(
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
    createElement(Path, {"d":"M9.999999988782292,21.998779299963644h-5c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299963644c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249489697,0,3,1.343145750506665,3,3v5","key":"0"}),
    createElement(Line, {"x1":"1.999999988782292","y1":"7.998779299963644","x2":"21.999999988782292","y2":"7.998779299963644","key":"1"}),
    createElement(Line, {"x1":"17.999999993642632","y1":"14.998779299956368","x2":"14.999999993642632","y2":"17.998779299956368","key":"2"}),
    createElement(Line, {"x1":"14.999999993711754","y1":"14.998779299890884","x2":"17.999999993571691","y2":"17.998779300026399","key":"3"}),
    createElement(Circle, {"cx":"16.499999988791387","cy":"16.498779299962735","r":"5.499999999999545","key":"4"})
  );
});

WindowXCirclePlain.displayName = 'WindowXCirclePlain';

module.exports = WindowXCirclePlain;
module.exports.WindowXCirclePlain = WindowXCirclePlain;
module.exports.default = WindowXCirclePlain;
