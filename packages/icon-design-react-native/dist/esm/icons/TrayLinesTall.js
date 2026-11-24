import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TrayLinesTall = forwardRef(function TrayLinesTall(
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
    createElement(Path, {"d":"M3 14L3 20C3 21.105 3.895 22 5 22L19 22C20.105 22 21 21.105 21 20L21 14","key":"0"}),
    createElement(Path, {"d":"M7 17L17 17","key":"1"}),
    createElement(Path, {"d":"M7 12L17 12","key":"2"}),
    createElement(Path, {"d":"M7 7L17 7","key":"3"}),
    createElement(Path, {"d":"M7 2L17 2","key":"4"})
  );
});

TrayLinesTall.displayName = 'TrayLinesTall';

export default TrayLinesTall;
export { TrayLinesTall };
