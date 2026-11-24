import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WindowSpinnerRays = forwardRef(function WindowSpinnerRays(
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
    createElement(Path, {"d":"M12 11L12 12","key":"5"}),
    createElement(Path, {"d":"M12 18L12 19","key":"6"}),
    createElement(Path, {"d":"M8.535 13L9.402 13.5","key":"7"}),
    createElement(Path, {"d":"M14.598 16.5L15.465 17","key":"8"}),
    createElement(Path, {"d":"M8.535 17L9.402 16.5","key":"9"}),
    createElement(Path, {"d":"M14.598 13.5L15.465 13","key":"10"})
  );
});

WindowSpinnerRays.displayName = 'WindowSpinnerRays';

export default WindowSpinnerRays;
export { WindowSpinnerRays };
