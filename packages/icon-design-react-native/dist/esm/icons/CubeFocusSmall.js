import { createElement, forwardRef } from 'react';
import Svg, { Line, Polygon, Polyline } from 'react-native-svg';

const CubeFocusSmall = forwardRef(function CubeFocusSmall(
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
    createElement(Polygon, {"points":"11.999999977619154 12.999996562448359 17.999999977490006 8.999996562222805 11.999999977349944 4.999996562448359 5.999999977490006 8.999996562670276 11.999999977619154 12.999996562448359","key":"0"}),
    createElement(Polyline, {"points":"5.999999977490006 8.999996562670276 5.999999977761036 14.999996562670276 11.999999977890184 18.999996562448359 17.999999977761036 14.999996562222805 17.999999977490006 8.999996562222805","key":"1"}),
    createElement(Line, {"x1":"11.999999977619154","y1":"12.999996562448359","x2":"11.999999977890184","y2":"18.999996562448359","key":"2"}),
    createElement(Polyline, {"points":"21.999999977098923 6.999996563434252 21.999999977098923 1.999996563434252 16.999999977098923 1.999996563434252","key":"3"}),
    createElement(Polyline, {"points":"6.999999977209882 1.999996563547029 1.999999977209882 1.999996563321474 1.999999976989784 6.999996563321474","key":"4"}),
    createElement(Polyline, {"points":"1.999999976989784 16.999996563434252 1.999999976989784 21.999996563434252 6.999999976989784 21.999996563434252","key":"5"}),
    createElement(Polyline, {"points":"16.999999976880645 21.999996563325112 21.999999976880645 21.999996563547029 21.999999977098923 16.999996563547029","key":"6"})
  );
});

CubeFocusSmall.displayName = 'CubeFocusSmall';

export default CubeFocusSmall;
export { CubeFocusSmall };
