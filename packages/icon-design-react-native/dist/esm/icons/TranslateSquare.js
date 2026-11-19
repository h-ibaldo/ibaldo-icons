import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const TranslateSquare = forwardRef(function TranslateSquare(
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
    createElement(Rect, {"x":"1.974731438136587","y":"3.997562039460718","width":"20","height":"16","rx":"2","ry":"2","key":"0"}),
    createElement(Path, {"d":"M8.974731438136587,15.997562039460718v-6.000002000000677c0-1.10456839509061-.895429604919627-1.999997999999323-1.999998000001142-1.999997999999323h-.000003999999535c-1.10456839509061,0-1.999997999999323.895429604908713-1.999997999999323,1.999997999999323v6.000002000000677","key":"1"}),
    createElement(Line, {"x1":"4.974731438136587","y1":"12.997562039460718","x2":"8.974731438136587","y2":"12.997562039460718","key":"2"}),
    createElement(Line, {"x1":"11.974731438136587","y1":"9.997562039460718","x2":"18.974731438136587","y2":"9.997562039460718","key":"3"}),
    createElement(Line, {"x1":"14.974731438136587","y1":"7.997562039460718","x2":"14.974731438136587","y2":"9.997562039460718","key":"4"}),
    createElement(Path, {"d":"M17.949462883445449,9.997562039460718c0,2-2,5-5,6","key":"5"}),
    createElement(Path, {"d":"M14.070190422497035,12.997562039460718c.878051757828871,1.272705078125,2.215942382828871,2.445556640625,3.879272460948414,3","key":"6"})
  );
});

TranslateSquare.displayName = 'TranslateSquare';

export default TranslateSquare;
export { TranslateSquare };
