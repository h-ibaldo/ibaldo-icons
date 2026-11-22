import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlipHorizontal = forwardRef(function FlipHorizontal(
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
    createElement(Path, {"d":"M12 2L12 22","key":"0"}),
    createElement(Path, {"d":"M17 8L17 16L22 12Z","key":"1"}),
    createElement(Path, {"d":"M7 16L7 8L2 12Z","key":"2"})
  );
});

FlipHorizontal.displayName = 'FlipHorizontal';

export default FlipHorizontal;
export { FlipHorizontal };
