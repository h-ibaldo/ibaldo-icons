import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlipVerticalIn = forwardRef(function FlipVerticalIn(
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
    createElement(Path, {"d":"M2 12L22 12","key":"0"}),
    createElement(Path, {"d":"M16 2L8 2L12 7Z","key":"1"}),
    createElement(Path, {"d":"M8 22L16 22L12 17Z","key":"2"})
  );
});

FlipVerticalIn.displayName = 'FlipVerticalIn';

export default FlipVerticalIn;
export { FlipVerticalIn };
