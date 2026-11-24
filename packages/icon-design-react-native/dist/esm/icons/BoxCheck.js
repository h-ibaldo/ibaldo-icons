import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BoxCheck = forwardRef(function BoxCheck(
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
    createElement(Path, {"d":"M7 4.5L17 9.5","key":"0"}),
    createElement(Path, {"d":"M2 7L12 12L22 7","key":"1"}),
    createElement(Path, {"d":"M12 22L12 12","key":"2"}),
    createElement(Path, {"d":"M15 20.5L12 22L2 17L2 7L12 2L22 7L22 12","key":"3"}),
    createElement(Path, {"d":"M22 15L19 19L17 17","key":"4"})
  );
});

BoxCheck.displayName = 'BoxCheck';

export default BoxCheck;
export { BoxCheck };
