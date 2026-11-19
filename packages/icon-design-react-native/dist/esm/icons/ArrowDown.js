import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDown = forwardRef(function ArrowDown(
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
    createElement(Path, {"d":"M4 12L12 20L20 12","key":"0"}),
    createElement(Path, {"d":"M12 20L12 4","key":"1"})
  );
});

ArrowDown.displayName = 'ArrowDown';

export default ArrowDown;
export { ArrowDown };
