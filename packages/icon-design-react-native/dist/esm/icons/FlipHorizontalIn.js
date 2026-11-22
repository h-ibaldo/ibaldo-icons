import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlipHorizontalIn = forwardRef(function FlipHorizontalIn(
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
    createElement(Path, {"d":"M12 22L12 2","key":"0"}),
    createElement(Path, {"d":"M2 8L2 16L7 12Z","key":"1"}),
    createElement(Path, {"d":"M22 16L22 8L17 12Z","key":"2"})
  );
});

FlipHorizontalIn.displayName = 'FlipHorizontalIn';

export default FlipHorizontalIn;
export { FlipHorizontalIn };
