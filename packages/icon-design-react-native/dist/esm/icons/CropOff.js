import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CropOff = forwardRef(function CropOff(
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
    createElement(Path, {"d":"M6 2L6 16C6 17.105 6.895 18 8 18L22 18","key":"0"}),
    createElement(Path, {"d":"M18 14L18 8C18 6.895 17.105 6 16 6L10 6","key":"1"}),
    createElement(Path, {"d":"M6 6L2 6","key":"2"}),
    createElement(Path, {"d":"M18 22L18 18","key":"3"}),
    createElement(Path, {"d":"M7 17L20 4","key":"4"})
  );
});

CropOff.displayName = 'CropOff';

export default CropOff;
export { CropOff };
