import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WindowSyncLarge = forwardRef(function WindowSyncLarge(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M2 8L22 8","key":"1"}),
    createElement(Path, {"d":"M5 5L5 5","key":"2"}),
    createElement(Path, {"d":"M8 5L8 5","key":"3"}),
    createElement(Path, {"d":"M11 5L11 5","key":"4"}),
    createElement(Path, {"d":"M14 15L16 17L18 15","key":"5"}),
    createElement(Path, {"d":"M10 15L8 13L6 15","key":"6"}),
    createElement(Path, {"d":"M15.641 16.641C15.867 16.137 16 15.586 16 15C16 12.789 14.211 11 12 11C11.652 11 11.32 11.063 11 11.152","key":"7"}),
    createElement(Path, {"d":"M8.359 13.359C8.133 13.863 8 14.414 8 15C8 17.211 9.789 19 12 19C12.348 19 12.68 18.938 13 18.848","key":"8"})
  );
});

WindowSyncLarge.displayName = 'WindowSyncLarge';

export default WindowSyncLarge;
export { WindowSyncLarge };
