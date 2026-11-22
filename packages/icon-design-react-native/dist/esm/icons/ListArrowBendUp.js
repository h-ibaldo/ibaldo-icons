import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListArrowBendUp = forwardRef(function ListArrowBendUp(
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
    createElement(Path, {"d":"M16.918 22L2 22","key":"0"}),
    createElement(Path, {"d":"M17 14L2 14","key":"1"}),
    createElement(Path, {"d":"M22 22L22 9C22 7.344 20.656 6 19 6L13 6","key":"2"}),
    createElement(Path, {"d":"M9 6L2 6","key":"3"}),
    createElement(Path, {"d":"M17 10L13 6L17 2","key":"4"})
  );
});

ListArrowBendUp.displayName = 'ListArrowBendUp';

export default ListArrowBendUp;
export { ListArrowBendUp };
