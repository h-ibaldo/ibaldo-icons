import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListClockDash = forwardRef(function ListClockDash(
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
    createElement(Path, {"d":"M20 9L16 9","key":"0"}),
    createElement(Path, {"d":"M20 13L16 13","key":"1"}),
    createElement(Path, {"d":"M20 17L9 17","key":"2"}),
    createElement(Path, {"d":"M20 21L9 21","key":"3"}),
    createElement(Path, {"d":"M5 17L4 17","key":"4"}),
    createElement(Path, {"d":"M5 21L4 21","key":"5"}),
    createElement(Path, {"d":"M12 8C12 10.762 9.762 13 7 13C4.238 13 2 10.762 2 8C2 5.238 4.238 3 7 3C9.762 3 12 5.238 12 8Z","key":"6"}),
    createElement(Path, {"d":"M7 6L7 8L9 8","key":"7"})
  );
});

ListClockDash.displayName = 'ListClockDash';

export default ListClockDash;
export { ListClockDash };
