import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDivergeFour = forwardRef(function ArrowDivergeFour(
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
    createElement(Path, {"d":"M10 4L12 2L14 4","key":"0"}),
    createElement(Path, {"d":"M12 7L12 2","key":"1"}),
    createElement(Path, {"d":"M14 20L12 22L10 20","key":"2"}),
    createElement(Path, {"d":"M12 17L12 22","key":"3"}),
    createElement(Path, {"d":"M20 10L22 12L20 14","key":"4"}),
    createElement(Path, {"d":"M17 12L22 12","key":"5"}),
    createElement(Path, {"d":"M4 14L2 12L4 10","key":"6"}),
    createElement(Path, {"d":"M7 12L2 12","key":"7"}),
    createElement(Path, {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z","key":"8"})
  );
});

ArrowDivergeFour.displayName = 'ArrowDivergeFour';

export default ArrowDivergeFour;
export { ArrowDivergeFour };
