import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDownRightSmall = forwardRef(function ChevronDownRightSmall(
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
    createElement(Path, {"d":"M14 9L14 14L9 14","key":"0"})
  );
});

ChevronDownRightSmall.displayName = 'ChevronDownRightSmall';

export default ChevronDownRightSmall;
export { ChevronDownRightSmall };
