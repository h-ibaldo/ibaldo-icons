import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TrayStackX = forwardRef(function TrayStackX(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 12C2 10.895 2.895 10 4 10L20 10C21.105 10 22 10.895 22 12L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M4 10L4 8C4 6.895 4.895 6 6 6L18 6C19.105 6 20 6.895 20 8L20 10","key":"1"}),
    createElement(Path, {"d":"M6 6L6 4C6 2.895 6.895 2 8 2L16 2C17.105 2 18 2.895 18 4L18 6","key":"2"}),
    createElement(Path, {"d":"M14 14L10 18","key":"3"}),
    createElement(Path, {"d":"M14 18L10 14","key":"4"})
  );
});

TrayStackX.displayName = 'TrayStackX';

export default TrayStackX;
export { TrayStackX };
