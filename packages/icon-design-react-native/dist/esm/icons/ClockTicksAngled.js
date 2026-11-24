import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockTicksAngled = forwardRef(function ClockTicksAngled(
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
    createElement(Path, {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z","key":"0"}),
    createElement(Path, {"d":"M12 4L12 2","key":"1"}),
    createElement(Path, {"d":"M12 22L12 20","key":"2"}),
    createElement(Path, {"d":"M20 12L22 12","key":"3"}),
    createElement(Path, {"d":"M2 12L4 12","key":"4"}),
    createElement(Path, {"d":"M12 8L12 12L16 14","key":"5"})
  );
});

ClockTicksAngled.displayName = 'ClockTicksAngled';

export default ClockTicksAngled;
export { ClockTicksAngled };
