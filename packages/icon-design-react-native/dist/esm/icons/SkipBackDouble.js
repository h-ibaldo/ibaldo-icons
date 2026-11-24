import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SkipBackDouble = forwardRef(function SkipBackDouble(
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
    createElement(Path, {"d":"M22 6.332L22 17.668C22 18.473 21.07 18.918 20.445 18.414L13.359 12.746C12.879 12.363 12.879 11.637 13.359 11.254L20.445 5.586C21.07 5.082 22 5.527 22 6.332Z","key":"0"}),
    createElement(Path, {"d":"M13 6.332L13 17.668C13 18.473 12.07 18.918 11.445 18.414L4.359 12.746C3.879 12.363 3.879 11.637 4.359 11.254L11.445 5.586C12.07 5.082 13 5.527 13 6.332Z","key":"1"}),
    createElement(Path, {"d":"M2 5L2 19","key":"2"})
  );
});

SkipBackDouble.displayName = 'SkipBackDouble';

export default SkipBackDouble;
export { SkipBackDouble };
