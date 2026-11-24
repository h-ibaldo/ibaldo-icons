import { createElement, forwardRef } from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

const ImageSunRight = forwardRef(function ImageSunRight(
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
    createElement(Rect, {"x":"1.999999993269739","y":"2.998779299956368","width":"20","height":"18","rx":"1","ry":"1","key":"0"}),
    createElement(Circle, {"cx":"14.999999993269739","cy":"8.998779299956368","r":"2","key":"1"}),
    createElement(Path, {"d":"M21.999999993269739,11.998779299956368l-6.438352043280247,4.59882288805602c-.338077100699593.24148364335997-.790251305519632.248774879408302-1.135938389939838.01831682313059l-4.85141913355983-3.23427942237322c-.345687084420206-.230458056277712-.797861289229331-.223166820233018-1.135938389939838.01831682313059l-6.438352043280247,4.59882288805602","key":"2"})
  );
});

ImageSunRight.displayName = 'ImageSunRight';

export default ImageSunRight;
export { ImageSunRight };
