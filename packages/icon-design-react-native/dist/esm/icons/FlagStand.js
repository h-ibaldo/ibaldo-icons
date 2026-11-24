import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlagStand = forwardRef(function FlagStand(
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
    createElement(Path, {"d":"M6 22L6 1.969L20 1.969L19.898 12.102L5.977 12.102","key":"0"}),
    createElement(Path, {"d":"M2 22L13 22","key":"1"})
  );
});

FlagStand.displayName = 'FlagStand';

export default FlagStand;
export { FlagStand };
