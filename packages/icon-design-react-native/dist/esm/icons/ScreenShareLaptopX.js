import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const ScreenShareLaptopX = forwardRef(function ScreenShareLaptopX(
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
    createElement(Rect, {"x":"5.974731440099276","y":"7.000000003885361","width":"15","height":"11","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M2.974731440099276,15.000000003885361c-.552284749819592,0-1-.447715250167676-1-1V4.000000003885361c0-.552284749828686.447715250180408-1,1-1h13c.552284749830505,0,1,.447715250171314,1,1","key":"1"}),
    createElement(Line, {"x1":"4.974731440099276","y1":"21.000000003885361","x2":"21.974731440099276","y2":"21.000000003885361","key":"2"}),
    createElement(Line, {"x1":"11.974731440099276","y1":"14.000000003888999","x2":"14.974731440099276","y2":"11.000000003888999","key":"3"}),
    createElement(Line, {"x1":"14.974731440170217","y1":"14.000000003819878","x2":"11.974731440041069","y2":"11.000000003954483","key":"4"})
  );
});

ScreenShareLaptopX.displayName = 'ScreenShareLaptopX';

export default ScreenShareLaptopX;
export { ScreenShareLaptopX };
