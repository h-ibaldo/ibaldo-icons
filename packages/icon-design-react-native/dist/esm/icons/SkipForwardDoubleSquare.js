import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SkipForwardDoubleSquare = forwardRef(function SkipForwardDoubleSquare(
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
    createElement(Path, {"d":"M18 8L18 16","key":"0"}),
    createElement(Path, {"d":"M12 9.078L12 14.922C12 15.699 12.879 16.148 13.512 15.699L17.602 12.777C18.133 12.395 18.133 11.602 17.602 11.223L13.512 8.301C12.879 7.852 12 8.301 12 9.078Z","key":"1"}),
    createElement(Path, {"d":"M6 9.078L6 14.922C6 15.699 6.879 16.148 7.512 15.699L11.602 12.777C12.133 12.395 12.133 11.602 11.602 11.223L7.512 8.301C6.879 7.852 6 8.301 6 9.078Z","key":"2"}),
    createElement(Path, {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z","key":"3"})
  );
});

SkipForwardDoubleSquare.displayName = 'SkipForwardDoubleSquare';

export default SkipForwardDoubleSquare;
export { SkipForwardDoubleSquare };
