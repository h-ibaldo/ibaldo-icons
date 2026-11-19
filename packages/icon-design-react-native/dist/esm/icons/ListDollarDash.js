import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListDollarDash = forwardRef(function ListDollarDash(
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
    createElement(Path, {"d":"M8 4L14 4","key":"0"}),
    createElement(Path, {"d":"M8 9L14 9","key":"1"}),
    createElement(Path, {"d":"M3 4L4 4","key":"2"}),
    createElement(Path, {"d":"M3 9L4 9","key":"3"}),
    createElement(Path, {"d":"M8 14L14 14","key":"4"}),
    createElement(Path, {"d":"M3 14L4 14","key":"5"}),
    createElement(Path, {"d":"M21.621 10C20.793 9.172 19.449 9.172 18.621 10C17.793 10.828 17.793 12.172 18.621 13L21.121 15.5C21.949 16.328 21.949 17.672 21.121 18.5C20.293 19.328 18.949 19.328 18.121 18.5","key":"6"}),
    createElement(Path, {"d":"M20 8L20 9.379","key":"7"}),
    createElement(Path, {"d":"M20 19.121L20 21","key":"8"})
  );
});

ListDollarDash.displayName = 'ListDollarDash';

export default ListDollarDash;
export { ListDollarDash };
