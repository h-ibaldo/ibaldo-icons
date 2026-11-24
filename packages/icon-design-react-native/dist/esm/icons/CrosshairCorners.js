import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CrosshairCorners = forwardRef(function CrosshairCorners(
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
    createElement(Path, {"d":"M12 2L12 9","key":"0"}),
    createElement(Path, {"d":"M12 15L12 22","key":"1"}),
    createElement(Path, {"d":"M22 12L15 12","key":"2"}),
    createElement(Path, {"d":"M9 12L2 12","key":"3"}),
    createElement(Path, {"d":"M12 9L15 12L12 15L9 12Z","key":"4"}),
    createElement(Path, {"d":"M16 5L19 5L19 8","key":"5"}),
    createElement(Path, {"d":"M8 19L5 19L5 16","key":"6"}),
    createElement(Path, {"d":"M5 8L5 5L8 5","key":"7"}),
    createElement(Path, {"d":"M19 16L19 19L16 19","key":"8"})
  );
});

CrosshairCorners.displayName = 'CrosshairCorners';

export default CrosshairCorners;
export { CrosshairCorners };
