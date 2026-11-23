import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Space = forwardRef(function Space(
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
    createElement(Path, {"d":"M2 15L2 18L22 18L22 15","key":"0"})
  );
});

Space.displayName = 'Space';

export default Space;
export { Space };
