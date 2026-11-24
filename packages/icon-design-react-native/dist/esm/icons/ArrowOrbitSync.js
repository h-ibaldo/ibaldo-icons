import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowOrbitSync = forwardRef(function ArrowOrbitSync(
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
    createElement(Path, {"d":"M4.93 4.93C8.832 1.023 15.164 1.023 19.07 4.93","key":"0"}),
    createElement(Path, {"d":"M19.07 19.07C15.168 22.977 8.836 22.977 4.93 19.07","key":"1"}),
    createElement(Path, {"d":"M14 6L12 8L14 10","key":"2"}),
    createElement(Path, {"d":"M22 12C22 9.789 17.523 8 12 8","key":"3"}),
    createElement(Path, {"d":"M8 8.336C4.469 8.953 2 10.359 2 12","key":"4"}),
    createElement(Path, {"d":"M10 18L12 16L10 14","key":"5"}),
    createElement(Path, {"d":"M2 12C2 14.211 6.477 16 12 16","key":"6"}),
    createElement(Path, {"d":"M16 15.664C19.531 15.047 22 13.641 22 12","key":"7"})
  );
});

ArrowOrbitSync.displayName = 'ArrowOrbitSync';

export default ArrowOrbitSync;
export { ArrowOrbitSync };
