import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Polyline, Rect } from 'react-native-svg';

const VipSquare = forwardRef(function VipSquare(
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
    createElement(Polyline, {"points":"4.999999968595148 7.997562036226554 6.999999968595148 15.997562036226554 8.999999968595148 7.997562036226554","key":"0"}),
    createElement(Line, {"x1":"14.999999968595148","y1":"7.997562036226554","x2":"14.999999968595148","y2":"15.997562036226554","key":"1"}),
    createElement(Line, {"x1":"11.999999968595148","y1":"7.997562036226554","x2":"11.999999968595148","y2":"15.997562036226554","key":"2"}),
    createElement(Path, {"d":"M14.999999968595148,7.997562036226554h2c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.10456949966192-.895430500338989,2-2,2h-2","key":"3"}),
    createElement(Rect, {"x":"1.999999968595148","y":"3.997562036226554","width":"20","height":"16","rx":"2","ry":"2","key":"4"})
  );
});

VipSquare.displayName = 'VipSquare';

export default VipSquare;
export { VipSquare };
