import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListPlus = forwardRef(function ListPlus(
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
    createElement(Path, {"d":"M2 4L22 4","key":"0"}),
    createElement(Path, {"d":"M2 12L11 12","key":"1"}),
    createElement(Path, {"d":"M16 12L22 12","key":"2"}),
    createElement(Path, {"d":"M16 12L22 12","key":"3"}),
    createElement(Path, {"d":"M19 9L19 15","key":"4"}),
    createElement(Path, {"d":"M2 20L22 20","key":"5"})
  );
});

ListPlus.displayName = 'ListPlus';

export default ListPlus;
export { ListPlus };
