import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlipVerticalInDashed = forwardRef(function FlipVerticalInDashed(
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
    createElement(Path, {"d":"M2 12L4 12","key":"0"}),
    createElement(Path, {"d":"M8 12L10 12","key":"1"}),
    createElement(Path, {"d":"M14 12L16 12","key":"2"}),
    createElement(Path, {"d":"M20 12L22 12","key":"3"}),
    createElement(Path, {"d":"M16 2L8 2L12 7Z","key":"4"}),
    createElement(Path, {"d":"M8 22L16 22L12 17Z","key":"5"})
  );
});

FlipVerticalInDashed.displayName = 'FlipVerticalInDashed';

export default FlipVerticalInDashed;
export { FlipVerticalInDashed };
