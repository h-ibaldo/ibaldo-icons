import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TrendUp = forwardRef(function TrendUp(
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
    createElement(Path, {"d":"M2 18L9 12L13 16L22 7","key":"0"}),
    createElement(Path, {"d":"M16 7L22 7L22 13","key":"1"})
  );
});

TrendUp.displayName = 'TrendUp';

export default TrendUp;
export { TrendUp };
