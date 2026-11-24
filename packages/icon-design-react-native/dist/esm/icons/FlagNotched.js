import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FlagNotched = forwardRef(function FlagNotched(
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
    createElement(Path, {"d":"M4 22L4 1.969L20 1.969L14.883 7.086L19.898 12.102L3.977 12.102","key":"0"})
  );
});

FlagNotched.displayName = 'FlagNotched';

export default FlagNotched;
export { FlagNotched };
