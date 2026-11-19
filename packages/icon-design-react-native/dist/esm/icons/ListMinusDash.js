import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListMinusDash = forwardRef(function ListMinusDash(
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
    createElement(Path, {"d":"M8 5L14 5","key":"0"}),
    createElement(Path, {"d":"M8 10L14 10","key":"1"}),
    createElement(Path, {"d":"M3 5L4 5","key":"2"}),
    createElement(Path, {"d":"M3 10L4 10","key":"3"}),
    createElement(Path, {"d":"M8 15L14 15","key":"4"}),
    createElement(Path, {"d":"M3 15L4 15","key":"5"}),
    createElement(Path, {"d":"M21 19L15 19","key":"6"})
  );
});

ListMinusDash.displayName = 'ListMinusDash';

export default ListMinusDash;
export { ListMinusDash };
