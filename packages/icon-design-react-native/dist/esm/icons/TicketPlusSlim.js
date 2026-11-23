import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const TicketPlusSlim = forwardRef(function TicketPlusSlim(
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
    createElement(Path, {"d":"M16 5L22 5","key":"0"}),
    createElement(Path, {"d":"M19 2L19 8","key":"1"}),
    createElement(Path, {"d":"M6.484 3.66L8.141 2L22 15.859L20.34 17.516C19.988 17.195 19.516 17 19 17C17.895 17 17 17.895 17 19C17 19.516 17.195 19.988 17.516 20.34L15.859 22L2 8.141L3.66 6.484C4.012 6.805 4.484 7 5 7C6.105 7 7 6.105 7 5C7 4.484 6.805 4.012 6.484 3.66Z","key":"2"}),
    createElement(Path, {"d":"M6 12L7 11","key":"3"}),
    createElement(Path, {"d":"M11 7L12 6","key":"4"}),
    createElement(Path, {"d":"M9 9L9 9","key":"5"})
  );
});

TicketPlusSlim.displayName = 'TicketPlusSlim';

export default TicketPlusSlim;
export { TicketPlusSlim };
