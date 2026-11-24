import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderSync = forwardRef(function FolderSync(
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
    createElement(Path, {"d":"M22 12L22 15L19 15","key":"0"}),
    createElement(Path, {"d":"M11 21L11 18L14 18","key":"1"}),
    createElement(Path, {"d":"M21.578 15C20.805 13.234 19.051 12 17 12C15.371 12 13.934 12.793 13.023 14","key":"2"}),
    createElement(Path, {"d":"M12.102 18C12.563 20.281 14.582 22 17 22C19.047 22 20.797 20.762 21.57 19","key":"3"}),
    createElement(Path, {"d":"M7 21L4 21C2.895 21 2 20.105 2 19L2 5C2 3.895 2.895 3 4 3L7.93 3C8.598 3 9.223 3.336 9.594 3.891L10.406 5.109C10.777 5.664 11.402 6 12.07 6L20 6C21.105 6 22 6.895 22 8","key":"4"})
  );
});

FolderSync.displayName = 'FolderSync';

export default FolderSync;
export { FolderSync };
