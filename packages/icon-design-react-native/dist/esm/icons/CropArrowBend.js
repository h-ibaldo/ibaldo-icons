import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CropArrowBend = forwardRef(function CropArrowBend(
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
    createElement(Path, {"d":"M18 6L20 8L22 6","key":"0"}),
    createElement(Path, {"d":"M20 8L20 4C20 2.895 19.105 2 18 2L14 2","key":"1"}),
    createElement(Path, {"d":"M6 18L4 16L2 18","key":"2"}),
    createElement(Path, {"d":"M4 16L4 20C4 21.105 4.895 22 6 22L10 22","key":"3"}),
    createElement(Path, {"d":"M8 6L8 14C8 15.105 8.895 16 10 16L18 16","key":"4"}),
    createElement(Path, {"d":"M16 13L16 10C16 8.895 15.105 8 14 8L11 8","key":"5"}),
    createElement(Path, {"d":"M8 8L6 8","key":"6"}),
    createElement(Path, {"d":"M16 18L16 16","key":"7"})
  );
});

CropArrowBend.displayName = 'CropArrowBend';

export default CropArrowBend;
export { CropArrowBend };
