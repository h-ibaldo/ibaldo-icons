import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const BorderBottom = forwardRef(function BorderBottom(
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
    createElement(Path, {"d":"M2 2L2 2","key":"0"}),
    createElement(Path, {"d":"M2 7L2 7","key":"1"}),
    createElement(Path, {"d":"M2 12L2 12","key":"2"}),
    createElement(Path, {"d":"M2 17L2 17","key":"3"}),
    createElement(Path, {"d":"M22 22L2 22","key":"4"}),
    createElement(Path, {"d":"M22 2L22 2","key":"5"}),
    createElement(Path, {"d":"M17 2L17 2","key":"6"}),
    createElement(Path, {"d":"M12 2L12 2","key":"7"}),
    createElement(Path, {"d":"M7 2L7 2","key":"8"}),
    createElement(Path, {"d":"M17 12L17 12","key":"9"}),
    createElement(Path, {"d":"M12 12L12 12","key":"10"}),
    createElement(Path, {"d":"M7 12L7 12","key":"11"}),
    createElement(Path, {"d":"M22 7L22 7","key":"12"}),
    createElement(Path, {"d":"M22 12L22 12","key":"13"}),
    createElement(Path, {"d":"M22 17L22 17","key":"14"}),
    createElement(Path, {"d":"M12 7L12 7","key":"15"}),
    createElement(Path, {"d":"M12 17L12 17","key":"16"})
  );
});

BorderBottom.displayName = 'BorderBottom';

export default BorderBottom;
export { BorderBottom };
