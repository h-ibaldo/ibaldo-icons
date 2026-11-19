import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronUpRightSmall = forwardRef(function ChevronUpRightSmall(
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
    createElement(Path, {"d":"M14 15L14 10L9 10","key":"0"})
  );
});

ChevronUpRightSmall.displayName = 'ChevronUpRightSmall';

export default ChevronUpRightSmall;
export { ChevronUpRightSmall };
