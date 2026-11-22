import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlipVertical = forwardRef(function FlipVertical(
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
    createElement(Path, {"d":"M8 7L16 7L12 2Z","key":"1"}),
    createElement(Path, {"d":"M16 17L8 17L12 22Z","key":"2"})
  );
});

FlipVertical.displayName = 'FlipVertical';

export default FlipVertical;
export { FlipVertical };
