import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListArrowBendDownLeft = forwardRef(function ListArrowBendDownLeft(
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
    createElement(Path, {"d":"M16.918 2L2 2","key":"0"}),
    createElement(Path, {"d":"M17 10L2 10","key":"1"}),
    createElement(Path, {"d":"M22 2L22 15C22 16.656 20.656 18 19 18L13 18","key":"2"}),
    createElement(Path, {"d":"M9 18L2 18","key":"3"}),
    createElement(Path, {"d":"M17 14L13 18L17 22","key":"4"})
  );
});

ListArrowBendDownLeft.displayName = 'ListArrowBendDownLeft';

export default ListArrowBendDownLeft;
export { ListArrowBendDownLeft };
