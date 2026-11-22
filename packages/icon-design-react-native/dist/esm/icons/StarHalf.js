import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const StarHalf = forwardRef(function StarHalf(
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
    createElement(Path, {"d":"M13 17.93L8.32 21.328C7.348 22.039 6.035 21.082 6.406 19.938L8.195 14.438L3.516 11.039C2.539 10.332 3.043 8.789 4.246 8.789L10.031 8.789L11.816 3.289","key":"0"})
  );
});

StarHalf.displayName = 'StarHalf';

export default StarHalf;
export { StarHalf };
