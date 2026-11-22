import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlipHorizontalDashed = forwardRef(function FlipHorizontalDashed(
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
    createElement(Path, {"d":"M12 22L12 20","key":"0"}),
    createElement(Path, {"d":"M12 16L12 14","key":"1"}),
    createElement(Path, {"d":"M12 10L12 8","key":"2"}),
    createElement(Path, {"d":"M12 4L12 2","key":"3"}),
    createElement(Path, {"d":"M7 16L7 8L2 12Z","key":"4"}),
    createElement(Path, {"d":"M17 8L17 16L22 12Z","key":"5"})
  );
});

FlipHorizontalDashed.displayName = 'FlipHorizontalDashed';

export default FlipHorizontalDashed;
export { FlipHorizontalDashed };
