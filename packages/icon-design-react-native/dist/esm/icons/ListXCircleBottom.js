import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ListXCircleBottom = forwardRef(function ListXCircleBottom(
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
    createElement(Path, {"d":"M6.117 20C6.117 21.105 5.223 22 4.117 22C3.016 22 2.117 21.105 2.117 20C2.117 18.895 3.016 18 4.117 18C5.223 18 6.117 18.895 6.117 20Z","key":"0"}),
    createElement(Path, {"d":"M10.117 4L22.117 4","key":"1"}),
    createElement(Path, {"d":"M10.117 12L22.117 12","key":"2"}),
    createElement(Path, {"d":"M10.117 20L22.117 20","key":"3"}),
    createElement(Path, {"d":"M6.117 2L2.117 6","key":"4"}),
    createElement(Path, {"d":"M2.117 2L6.117 6","key":"5"}),
    createElement(Path, {"d":"M6.117 10L2.117 14","key":"6"}),
    createElement(Path, {"d":"M2.117 10L6.117 14","key":"7"})
  );
});

ListXCircleBottom.displayName = 'ListXCircleBottom';

export default ListXCircleBottom;
export { ListXCircleBottom };
