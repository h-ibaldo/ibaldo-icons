import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronUpLeftSmall = forwardRef(function ChevronUpLeftSmall(
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
    createElement(Path, {"d":"M10 15L10 10L15 10","key":"0"})
  );
});

ChevronUpLeftSmall.displayName = 'ChevronUpLeftSmall';

export default ChevronUpLeftSmall;
export { ChevronUpLeftSmall };
