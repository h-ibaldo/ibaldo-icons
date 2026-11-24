import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PencilSparkles = forwardRef(function PencilSparkles(
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
    createElement(Path, {"d":"M21.5 3.758L20.328 2.586C19.547 1.805 18.281 1.805 17.5 2.586L3 17.086L2 22.086L7 21.086L21.5 6.586C22.281 5.805 22.281 4.539 21.5 3.758Z","key":"0"}),
    createElement(Path, {"d":"M15 5.086L19 9.086","key":"1"}),
    createElement(Path, {"d":"M4 16.086L8 20.086","key":"2"}),
    createElement(Path, {"d":"M5.5 3L5.5 8","key":"3"}),
    createElement(Path, {"d":"M8 5.5L3 5.5","key":"4"}),
    createElement(Path, {"d":"M20.5 13L20.5 16","key":"5"}),
    createElement(Path, {"d":"M22 14.5L19 14.5","key":"6"}),
    createElement(Path, {"d":"M16.5 19L16.5 22","key":"7"}),
    createElement(Path, {"d":"M18 20.5L15 20.5","key":"8"})
  );
});

PencilSparkles.displayName = 'PencilSparkles';

export default PencilSparkles;
export { PencilSparkles };
