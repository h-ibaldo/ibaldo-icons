import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowSyncSquareHook = forwardRef(function ArrowSyncSquareHook(
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
    createElement(Path, {"d":"M19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2Z","key":"0"}),
    createElement(Path, {"d":"M10 12L8 14L6 12","key":"1"}),
    createElement(Path, {"d":"M13 7L11 7C9.344 7 8 8.344 8 10L8 14","key":"2"}),
    createElement(Path, {"d":"M14 12L16 10L18 12","key":"3"}),
    createElement(Path, {"d":"M11 17L13 17C14.656 17 16 15.656 16 14L16 10","key":"4"})
  );
});

ArrowSyncSquareHook.displayName = 'ArrowSyncSquareHook';

export default ArrowSyncSquareHook;
export { ArrowSyncSquareHook };
