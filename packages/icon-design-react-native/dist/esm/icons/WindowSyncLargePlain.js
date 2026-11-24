import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WindowSyncLargePlain = forwardRef(function WindowSyncLargePlain(
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
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement(Path, {"d":"M2 8L22 8","key":"1"}),
    createElement(Path, {"d":"M14 15L16 17L18 15","key":"2"}),
    createElement(Path, {"d":"M10 15L8 13L6 15","key":"3"}),
    createElement(Path, {"d":"M15.641 16.641C15.867 16.137 16 15.586 16 15C16 12.789 14.211 11 12 11C11.652 11 11.32 11.063 11 11.152","key":"4"}),
    createElement(Path, {"d":"M8.359 13.359C8.133 13.863 8 14.414 8 15C8 17.211 9.789 19 12 19C12.348 19 12.68 18.938 13 18.848","key":"5"})
  );
});

WindowSyncLargePlain.displayName = 'WindowSyncLargePlain';

export default WindowSyncLargePlain;
export { WindowSyncLargePlain };
