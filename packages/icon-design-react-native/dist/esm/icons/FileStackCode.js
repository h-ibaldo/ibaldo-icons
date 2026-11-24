import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileStackCode = forwardRef(function FileStackCode(
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
    createElement(Path, {"d":"M16 22L17 22C17.551 22 18 21.551 18 21L18 10.414C18 10.148 17.895 9.895 17.707 9.707L14.293 6.293C14.105 6.105 13.852 6 13.586 6L6 6C5.449 6 5 6.449 5 7L5 12","key":"0"}),
    createElement(Path, {"d":"M13 6L13 10C13 10.551 13.449 11 14 11L18 11","key":"1"}),
    createElement(Path, {"d":"M10 2L16.586 2C16.852 2 17.105 2.105 17.293 2.293L21.707 6.707C21.895 6.895 22 7.148 22 7.414L22 18","key":"2"}),
    createElement(Path, {"d":"M9 15L7 21","key":"3"}),
    createElement(Path, {"d":"M12 16L14 18L12 20","key":"4"}),
    createElement(Path, {"d":"M4 16L2 18L4 20","key":"5"})
  );
});

FileStackCode.displayName = 'FileStackCode';

export default FileStackCode;
export { FileStackCode };
