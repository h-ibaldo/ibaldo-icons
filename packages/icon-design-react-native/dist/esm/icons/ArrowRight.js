import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRight = forwardRef(function ArrowRight(
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
    createElement(Path, {"d":"M12 20L20 12L12 4","key":"0"}),
    createElement(Path, {"d":"M20 12L4 12","key":"1"})
  );
});

ArrowRight.displayName = 'ArrowRight';

export default ArrowRight;
export { ArrowRight };
