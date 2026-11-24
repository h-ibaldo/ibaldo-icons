import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListRightDash = forwardRef(function ListRightDash(
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
    createElement(Path, {"d":"M15 4L3 4","key":"0"}),
    createElement(Path, {"d":"M15 12L3 12","key":"1"}),
    createElement(Path, {"d":"M15 20L3 20","key":"2"}),
    createElement(Path, {"d":"M21 4L20 4","key":"3"}),
    createElement(Path, {"d":"M21 12L20 12","key":"4"}),
    createElement(Path, {"d":"M21 20L20 20","key":"5"})
  );
});

ListRightDash.displayName = 'ListRightDash';

export default ListRightDash;
export { ListRightDash };
