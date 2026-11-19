import { createElement, forwardRef } from 'react';
import Svg, { Rect } from 'react-native-svg';

const ScreenDockDots = forwardRef(function ScreenDockDots(
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
    createElement(Rect, {"x":"2.050537039181108","y":"3.997562051049499","width":"20","height":"16.000000000002274","rx":"1.999999999970797","ry":"1.999999999970797","key":"0"}),
    createElement(Rect, {"x":"16.050537043281111","y":"14.997562035462579","width":"2","height":"1","transform":"translate(34.101074085885664 30.995124071669508) rotate(-180)","key":"1"}),
    createElement(Rect, {"x":"11.050537043281111","y":"14.997562035238843","width":"2","height":"1","transform":"translate(24.101074085857476 30.995124071025678) rotate(-180)","key":"2"}),
    createElement(Rect, {"x":"6.050537043281111","y":"14.997562035013289","width":"2","height":"1","transform":"translate(14.101074085857476 30.995124070347195) rotate(-180)","key":"3"})
  );
});

ScreenDockDots.displayName = 'ScreenDockDots';

export default ScreenDockDots;
export { ScreenDockDots };
