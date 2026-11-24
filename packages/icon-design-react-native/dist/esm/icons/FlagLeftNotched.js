import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlagLeftNotched = forwardRef(function FlagLeftNotched(
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
    createElement(Path, {"d":"M20 22.031L20 2L4 2L9.117 7.117L4.102 12.133L20.023 12.133","key":"0"})
  );
});

FlagLeftNotched.displayName = 'FlagLeftNotched';

export default FlagLeftNotched;
export { FlagLeftNotched };
