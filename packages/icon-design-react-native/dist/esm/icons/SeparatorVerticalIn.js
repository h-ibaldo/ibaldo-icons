import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SeparatorVerticalIn = forwardRef(function SeparatorVerticalIn(
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
    createElement(Path, {"d":"M2 17.637L7 12.316L2 7","key":"1"}),
    createElement(Path, {"d":"M22 7L17.141 12.316L22 17.637","key":"2"})
  );
});

SeparatorVerticalIn.displayName = 'SeparatorVerticalIn';

export default SeparatorVerticalIn;
export { SeparatorVerticalIn };
