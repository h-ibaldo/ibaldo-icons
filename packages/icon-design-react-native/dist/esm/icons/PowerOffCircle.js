import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PowerOffCircle = forwardRef(function PowerOffCircle(
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
    createElement(Path, {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z","key":"0"}),
    createElement(Path, {"d":"M12 5L12 12","key":"1"}),
    createElement(Path, {"d":"M5 5L19 19","key":"2"}),
    createElement(Path, {"d":"M12.918 16.918C12.621 16.973 12.313 17 12 17C9.238 17 7 14.762 7 12C7 11.688 7.027 11.379 7.082 11.082","key":"3"}),
    createElement(Path, {"d":"M8.465 8.465C8.633 8.297 8.809 8.141 9 8","key":"4"}),
    createElement(Path, {"d":"M15 8C16.215 8.91 17 10.363 17 12C17 13.379 16.441 14.629 15.535 15.535","key":"5"})
  );
});

PowerOffCircle.displayName = 'PowerOffCircle';

export default PowerOffCircle;
export { PowerOffCircle };
