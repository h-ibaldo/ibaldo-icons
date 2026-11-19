import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowConvergeSix = forwardRef(function ArrowConvergeSix(
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
    createElement(Path, {"d":"M14 5L12 7L10 5","key":"0"}),
    createElement(Path, {"d":"M12 2L12 7","key":"1"}),
    createElement(Path, {"d":"M10 19L12 17L14 19","key":"2"}),
    createElement(Path, {"d":"M12 22L12 17","key":"3"}),
    createElement(Path, {"d":"M6.938 6.77L7.668 9.5L4.938 10.23","key":"4"}),
    createElement(Path, {"d":"M3.34 7L7.668 9.5","key":"5"}),
    createElement(Path, {"d":"M17.063 17.23L16.332 14.5L19.063 13.77","key":"6"}),
    createElement(Path, {"d":"M20.66 17L16.332 14.5","key":"7"}),
    createElement(Path, {"d":"M4.938 13.77L7.668 14.5L6.938 17.23","key":"8"}),
    createElement(Path, {"d":"M3.34 17L7.668 14.5","key":"9"}),
    createElement(Path, {"d":"M19.063 10.23L16.332 9.5L17.063 6.77","key":"10"}),
    createElement(Path, {"d":"M20.66 7L16.332 9.5","key":"11"}),
    createElement(Path, {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z","key":"12"})
  );
});

ArrowConvergeSix.displayName = 'ArrowConvergeSix';

export default ArrowConvergeSix;
export { ArrowConvergeSix };
