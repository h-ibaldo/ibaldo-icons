import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListBulletsDotsRight = forwardRef(function ListBulletsDotsRight(
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
    createElement(Path, {"d":"M7 4L14 4","key":"0"}),
    createElement(Path, {"d":"M7 12L14 12","key":"1"}),
    createElement(Path, {"d":"M7 20L14 20","key":"2"}),
    createElement(Path, {"d":"M2 4L3 4","key":"3"}),
    createElement(Path, {"d":"M2 12L3 12","key":"4"}),
    createElement(Path, {"d":"M7 8L14 8","key":"5"}),
    createElement(Path, {"d":"M2 8L3 8","key":"6"}),
    createElement(Path, {"d":"M2 20L3 20","key":"7"}),
    createElement(Path, {"d":"M7 16L14 16","key":"8"}),
    createElement(Path, {"d":"M22 4L22 4","key":"9"}),
    createElement(Path, {"d":"M22 12L22 12","key":"10"}),
    createElement(Path, {"d":"M22 20L22 20","key":"11"}),
    createElement(Path, {"d":"M22 8L22 8","key":"12"}),
    createElement(Path, {"d":"M22 16L22 16","key":"13"}),
    createElement(Path, {"d":"M19 4L19 4","key":"14"}),
    createElement(Path, {"d":"M19 12L19 12","key":"15"}),
    createElement(Path, {"d":"M19 16L19 16","key":"16"}),
    createElement(Path, {"d":"M2 16L3 16","key":"17"})
  );
});

ListBulletsDotsRight.displayName = 'ListBulletsDotsRight';

export default ListBulletsDotsRight;
export { ListBulletsDotsRight };
