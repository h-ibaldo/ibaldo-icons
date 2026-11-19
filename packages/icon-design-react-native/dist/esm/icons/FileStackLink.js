import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileStackLink = forwardRef(function FileStackLink(
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
    createElement(Path, {"d":"M4 17L2.828 15.828C1.723 14.723 1.723 12.934 2.828 11.828C3.934 10.723 5.723 10.723 6.828 11.828L8 13","key":"0"}),
    createElement(Path, {"d":"M11 16L12.172 17.172C13.277 18.277 13.277 20.066 12.172 21.172C11.066 22.277 9.277 22.277 8.172 21.172L7 20","key":"1"}),
    createElement(Path, {"d":"M6 15L9 18","key":"2"}),
    createElement(Path, {"d":"M16 22L17 22C17.555 22 18 21.555 18 21L18 10.414C18 10.148 17.895 9.895 17.707 9.707L14.293 6.293C14.105 6.105 13.852 6 13.586 6L6 6C5.445 6 5 6.445 5 7L5 8","key":"3"}),
    createElement(Path, {"d":"M13 6L13 10C13 10.555 13.445 11 14 11L18 11","key":"4"}),
    createElement(Path, {"d":"M10 2L16.586 2C16.852 2 17.105 2.105 17.293 2.293L21.707 6.707C21.895 6.895 22 7.148 22 7.414L22 18","key":"5"})
  );
});

FileStackLink.displayName = 'FileStackLink';

export default FileStackLink;
export { FileStackLink };
