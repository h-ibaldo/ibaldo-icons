import { createElement, forwardRef } from 'react';
import Svg, { Circle, G, Line, Path } from 'react-native-svg';

const SquareStackPlusCircle = forwardRef(function SquareStackPlusCircle(
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
    createElement(Path, {"d":"M9.999999993639904,21.997565472713177h-1c-1.104569499660101,0-2-.895430500338989-2-2v-11c0-1.104569499661011.895430500339899-2,2-2h11c1.104569499660101,0,2,.895430500338989,2,2v1","key":"0"}),
    createElement(Circle, {"cx":"16.999999993639904","cy":"16.997565472713177","r":"5","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Line, {"x1":"16.999999993639904","y1":"14.997565472713177","x2":"16.999999993639904","y2":"18.997565472713177","key":"0"}),
      createElement(Line, {"x1":"18.999999993639904","y1":"16.997565472622227","x2":"14.999999993639904","y2":"16.997565472801398","key":"1"})),
    createElement(Path, {"d":"M6.999999993639904,16.997565472713177h-3c-1.104569499660101,0-2-.895430500338989-2-2V3.997565472713177c0-1.104569499661011.895430500339899-2,2-2h11c1.104569499660101,0,2,.895430500338989,2,2v3","key":"3"})
  );
});

SquareStackPlusCircle.displayName = 'SquareStackPlusCircle';

export default SquareStackPlusCircle;
export { SquareStackPlusCircle };
