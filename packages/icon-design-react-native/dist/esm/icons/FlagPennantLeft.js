import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlagPennantLeft = forwardRef(function FlagPennantLeft(
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
    createElement(Path, {"d":"M17.855 22L17.855 1.969L3.977 8.086L17.883 14.102","key":"0"})
  );
});

FlagPennantLeft.displayName = 'FlagPennantLeft';

export default FlagPennantLeft;
export { FlagPennantLeft };
