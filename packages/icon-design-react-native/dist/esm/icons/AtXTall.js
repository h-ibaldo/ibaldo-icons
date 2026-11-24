import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const AtXTall = forwardRef(function AtXTall(
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
    createElement(Rect, {"x":"9.97472778430938","y":"7.000000000245379","width":"5.999999960396053","height":"9.999999999999687","rx":"2.999996979510464","ry":"2.999996979510464","key":"0"}),
    createElement(Line, {"x1":"17.974731450040053","y1":"22.00000000046839","x2":"12.974731450040053","y2":"22.000000000470209","key":"1"}),
    createElement(Path, {"d":"M15.974731450040053,14.00000000046839v1c0,1.10456949966283.895430500339899,2,2,2h1c1.104569499660101,0,2-.89543050033717,2-2v-1","key":"2"}),
    createElement(Line, {"x1":"2.974731450040053","y1":"2.00000000046839","x2":"6.974731450040053","y2":"6.00000000046839","key":"3"}),
    createElement(Line, {"x1":"6.974731450130093","y1":"2.00000000055843","x2":"2.974731449950013","y2":"6.000000000379259","key":"4"}),
    createElement(Path, {"d":"M20.974731450040053,14.00000000046839v-4c0-4.41827392578125-3.581726074220569-8-8-8-.692321777340112,0-1.359924316399884.097900390625-2,.2646484375","key":"5"}),
    createElement(Path, {"d":"M4.974731450040053,10.00000000046839v4c0,4.41827392578125,3.581726074219659,8,8,8","key":"6"})
  );
});

AtXTall.displayName = 'AtXTall';

export default AtXTall;
export { AtXTall };
