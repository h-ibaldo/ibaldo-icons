import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListChevronUpDown = forwardRef(function ListChevronUpDown(
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
    createElement(Path, {"d":"M13 4L22 4","key":"0"}),
    createElement(Path, {"d":"M13 12L22 12","key":"1"}),
    createElement(Path, {"d":"M13 20L22 20","key":"2"}),
    createElement(Path, {"d":"M9.363 7.363L5.684 4L2 7.363","key":"3"}),
    createElement(Path, {"d":"M2 17L5.684 20.363L9.363 17","key":"4"})
  );
});

ListChevronUpDown.displayName = 'ListChevronUpDown';

export default ListChevronUpDown;
export { ListChevronUpDown };
