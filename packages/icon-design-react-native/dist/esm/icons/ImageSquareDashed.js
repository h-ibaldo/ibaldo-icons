import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ImageSquareDashed = forwardRef(function ImageSquareDashed(
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
    createElement(Path, {"d":"M10 22L14 22","key":"0"}),
    createElement(Path, {"d":"M22 6.5L22 5C22 3.344 20.656 2 19 2L18 2","key":"1"}),
    createElement(Path, {"d":"M2 10.5L2 14.5","key":"2"}),
    createElement(Path, {"d":"M6 2L5 2C3.344 2 2 3.344 2 5L2 6.5","key":"3"}),
    createElement(Path, {"d":"M18 22L19 22C20.656 22 22 20.656 22 19L22 18.5","key":"4"}),
    createElement(Path, {"d":"M2 18.5L2 19C2 20.656 3.344 22 5 22L6 22","key":"5"}),
    createElement(Path, {"d":"M14 2L10 2","key":"6"}),
    createElement(Path, {"d":"M22 14.5L22 10.5","key":"7"}),
    createElement(Path, {"d":"M8 18L16 18C17.105 18 18 17.105 18 16L18 8C18 6.895 17.105 6 16 6L8 6C6.895 6 6 6.895 6 8L6 16C6 17.105 6.895 18 8 18Z","key":"8"}),
    createElement(Path, {"d":"M18 11C14.133 11 11 14.133 11 18","key":"9"}),
    createElement(Path, {"d":"M10 10L10 10","key":"10"})
  );
});

ImageSquareDashed.displayName = 'ImageSquareDashed';

export default ImageSquareDashed;
export { ImageSquareDashed };
