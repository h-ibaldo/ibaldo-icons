import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlagPennant = forwardRef(function FlagPennant(
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
    createElement(Path, {"d":"M6 22L6 1.969L19.883 8.086L5.977 14.102","key":"0"})
  );
});

FlagPennant.displayName = 'FlagPennant';

export default FlagPennant;
export { FlagPennant };
