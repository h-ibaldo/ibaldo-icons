import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ScanWindowBare = forwardRef(function ScanWindowBare(
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
    createElement(Path, {"d":"M16 18L8 18C6.895 18 6 17.105 6 16L6 8C6 6.895 6.895 6 8 6L16 6C17.105 6 18 6.895 18 8L18 16C18 17.105 17.105 18 16 18Z","key":"0"}),
    createElement(Path, {"d":"M9 9L9 9","key":"1"}),
    createElement(Path, {"d":"M12 9L12 9","key":"2"}),
    createElement(Path, {"d":"M2 7L2 5C2 3.344 3.344 2 5 2L7 2","key":"3"}),
    createElement(Path, {"d":"M22 7L22 5C22 3.344 20.656 2 19 2L17 2","key":"4"}),
    createElement(Path, {"d":"M2 17L2 19C2 20.656 3.344 22 5 22L7 22","key":"5"}),
    createElement(Path, {"d":"M22 17L22 19C22 20.656 20.656 22 19 22L17 22","key":"6"})
  );
});

ScanWindowBare.displayName = 'ScanWindowBare';

export default ScanWindowBare;
export { ScanWindowBare };
