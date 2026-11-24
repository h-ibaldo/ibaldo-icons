import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SeparatorHorizontalIn = forwardRef(function SeparatorHorizontalIn(
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
    createElement(Path, {"d":"M17.637 22L12.316 17L7 22","key":"1"}),
    createElement(Path, {"d":"M7 2L12.316 6.859L17.637 2","key":"2"})
  );
});

SeparatorHorizontalIn.displayName = 'SeparatorHorizontalIn';

export default SeparatorHorizontalIn;
export { SeparatorHorizontalIn };
