import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path, Polyline } from 'react-native-svg';

const WindowCheckCircle = forwardRef(function WindowCheckCircle(
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
    createElement(Path, {"d":"M9.999999993659912,21.998779299956368H3.999999993659912c-1.104569499670106,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500329894-2,2-2h16c1.104569499650097,0,2,.895430500338989,2,2v6","key":"0"}),
    createElement(Line, {"x1":"1.999999993659912","y1":"7.998779299956368","x2":"21.999999993659912","y2":"7.998779299956368","key":"1"}),
    createElement(Circle, {"cx":"16.999999993659912","cy":"16.998779299956368","r":"5","key":"2"}),
    createElement(Polyline, {"points":"15.499999993659912 16.998779297526198 16.499999993659912 17.9987793023829 18.499999993659912 15.998779297526198","key":"3"}),
    createElement(Line, {"x1":"5.009999993640122","y1":"4.998779299956368","x2":"4.999999993639904","y2":"4.998779299956368","key":"4"}),
    createElement(Line, {"x1":"8.009999993640122","y1":"4.998779299956368","x2":"7.999999993639904","y2":"4.998779299956368","key":"5"}),
    createElement(Line, {"x1":"11.009999993640122","y1":"4.998779299956368","x2":"10.999999993639904","y2":"4.998779299956368","key":"6"})
  );
});

WindowCheckCircle.displayName = 'WindowCheckCircle';

export default WindowCheckCircle;
export { WindowCheckCircle };
