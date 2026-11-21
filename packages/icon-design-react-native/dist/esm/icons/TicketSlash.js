import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TicketSlash = forwardRef(function TicketSlash(
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
    createElement(Path, {"d":"M2 9L2 6L22 6L22 9C20.344 9 19 10.344 19 12C19 13.656 20.344 15 22 15L22 18L2 18L2 15C3.656 15 5 13.656 5 12C5 10.344 3.656 9 2 9Z","key":"0"}),
    createElement(Path, {"d":"M10 14L14 10","key":"1"})
  );
});

TicketSlash.displayName = 'TicketSlash';

export default TicketSlash;
export { TicketSlash };
