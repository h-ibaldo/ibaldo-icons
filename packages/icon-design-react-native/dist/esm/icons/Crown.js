import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Crown = forwardRef(function Crown(
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
    createElement(Path, {"d":"M3 18L3 7L8 11L12 6L16 11L21 7L21 18Z","key":"0"})
  );
});

Crown.displayName = 'Crown';

export default Crown;
export { Crown };
