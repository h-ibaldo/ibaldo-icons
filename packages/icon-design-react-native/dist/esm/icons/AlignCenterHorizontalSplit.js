import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const AlignCenterHorizontalSplit = forwardRef(function AlignCenterHorizontalSplit(
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
    createElement(Path, {"d":"M2 12L22 12","key":"0"}),
    createElement(Path, {"d":"M14 9L14 5C14 4.449 14.449 4 15 4L19 4C19.551 4 20 4.449 20 5L20 9","key":"1"}),
    createElement(Path, {"d":"M20 15L20 19C20 19.551 19.551 20 19 20L15 20C14.449 20 14 19.551 14 19L14 15","key":"2"}),
    createElement(Path, {"d":"M4 9L4 3C4 2.449 4.449 2 5 2L9 2C9.551 2 10 2.449 10 3L10 9","key":"3"}),
    createElement(Path, {"d":"M10 15L10 21C10 21.551 9.551 22 9 22L5 22C4.449 22 4 21.551 4 21L4 15","key":"4"})
  );
});

AlignCenterHorizontalSplit.displayName = 'AlignCenterHorizontalSplit';

export default AlignCenterHorizontalSplit;
export { AlignCenterHorizontalSplit };
