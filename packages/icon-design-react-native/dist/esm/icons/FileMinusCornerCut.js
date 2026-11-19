import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileMinusCornerCut = forwardRef(function FileMinusCornerCut(
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
    createElement(Path, {"d":"M20 18L14 18","key":"0"}),
    createElement(Path, {"d":"M20 13L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L11 22","key":"1"})
  );
});

FileMinusCornerCut.displayName = 'FileMinusCornerCut';

export default FileMinusCornerCut;
export { FileMinusCornerCut };
