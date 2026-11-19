import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClockSquare = forwardRef(function ClockSquare(
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
    createElement(Path, {"d":"M18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22Z","key":"0"}),
    createElement(Path, {"d":"M18 12C18 8.688 15.313 6 12 6C8.688 6 6 8.688 6 12C6 15.313 8.688 18 12 18C15.313 18 18 15.313 18 12Z","key":"1"}),
    createElement(Path, {"d":"M12 9L12 12L14 13","key":"2"})
  );
});

ClockSquare.displayName = 'ClockSquare';

export default ClockSquare;
export { ClockSquare };
