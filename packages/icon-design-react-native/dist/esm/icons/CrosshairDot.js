import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CrosshairDot = forwardRef(function CrosshairDot(
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
    createElement(Path, {"d":"M3 12C3 7.031 7.031 3 12 3C16.969 3 21 7.031 21 12C21 16.969 16.969 21 12 21C7.031 21 3 16.969 3 12Z","key":"0"}),
    createElement(Path, {"d":"M11 12C11 11.449 11.449 11 12 11C12.551 11 13 11.449 13 12C13 12.551 12.551 13 12 13C11.449 13 11 12.551 11 12Z","key":"1"}),
    createElement(Path, {"d":"M12 2L12 6","key":"2"}),
    createElement(Path, {"d":"M12 18L12 22","key":"3"}),
    createElement(Path, {"d":"M22 12L18 12","key":"4"}),
    createElement(Path, {"d":"M6 12L2 12","key":"5"})
  );
});

CrosshairDot.displayName = 'CrosshairDot';

export default CrosshairDot;
export { CrosshairDot };
