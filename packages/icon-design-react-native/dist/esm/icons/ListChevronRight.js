import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListChevronRight = forwardRef(function ListChevronRight(
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
    createElement(Path, {"d":"M11 4L21 4","key":"0"}),
    createElement(Path, {"d":"M11 12L21 12","key":"1"}),
    createElement(Path, {"d":"M11 20L21 20","key":"2"}),
    createElement(Path, {"d":"M3 16.484L7.242 12.242L3 8","key":"3"})
  );
});

ListChevronRight.displayName = 'ListChevronRight';

export default ListChevronRight;
export { ListChevronRight };
