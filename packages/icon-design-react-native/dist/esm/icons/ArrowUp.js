import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUp = forwardRef(function ArrowUp(
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
    createElement(Path, {"d":"M4 12L12 4L20 12","key":"0"}),
    createElement(Path, {"d":"M12 4L12 20","key":"1"})
  );
});

ArrowUp.displayName = 'ArrowUp';

export default ArrowUp;
export { ArrowUp };
