import { createElement, forwardRef } from 'react';
import Svg, { Line, Path } from 'react-native-svg';

const LightbulbShine = forwardRef(function LightbulbShine(
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
    createElement(Path, {"d":"M5,8.999999999998181c0,1.860514322919698.727647569439796,3.548366970489951,1.912832754629562,4.799994574650555,1.273417640260959,1.344806440469256,2.087167245370438,3.057412944159296,2.087167245370438,4.909465008449843v.290540416899603h6v-.290540416899603c0-1.852052064290547.813749605109479-3.564658567980587,2.087167245370438-4.909465008449843,1.185185185189766-1.251627604160603,1.912832754629562-2.939480251730856,1.912832754629562-4.799994574650555","key":"0"}),
    createElement(Path, {"d":"M19,8.999999999998181c0-3.865966796869543-3.134033203130457-7-7-7-3.865966796880457,0-7,3.134033203130457-7,7","key":"1"}),
    createElement(Line, {"x1":"10","y1":"21.999999999998181","x2":"14","y2":"21.999999999998181","key":"2"}),
    createElement(Path, {"d":"M12,5.999999999998181c-1.656854249400567,0-3,1.343145750599433-3,3","key":"3"})
  );
});

LightbulbShine.displayName = 'LightbulbShine';

export default LightbulbShine;
export { LightbulbShine };
