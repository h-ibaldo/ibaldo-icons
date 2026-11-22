import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderArrowLeftCorner = forwardRef(function FolderArrowLeftCorner(
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
    createElement(Path, {"d":"M11 21L4 21C2.895 21 2 20.105 2 19L2 5C2 3.895 2.895 3 4 3L7.93 3C8.598 3 9.223 3.336 9.594 3.891L10.406 5.109C10.777 5.664 11.402 6 12.07 6L20 6C21.105 6 22 6.895 22 8L22 14","key":"0"}),
    createElement(Path, {"d":"M22 18L14 18","key":"1"}),
    createElement(Path, {"d":"M17 15L14 18L17 21","key":"2"})
  );
});

FolderArrowLeftCorner.displayName = 'FolderArrowLeftCorner';

export default FolderArrowLeftCorner;
export { FolderArrowLeftCorner };
