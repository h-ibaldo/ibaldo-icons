import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileImage = forwardRef(function FileImage(
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
    createElement(Path, {"d":"M5 21L10 16L12 18L16 14L20 18","key":"0"}),
    createElement(Path, {"d":"M10 11.5C10 11.776 9.776 12 9.5 12C9.224 12 9 11.776 9 11.5C9 11.224 9.224 11 9.5 11C9.776 11 10 11.224 10 11.5Z","key":"1"}),
    createElement(Path, {"d":"M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 20C20 21.105 19.105 22 18 22Z","key":"2"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8","key":"3"})
  );
});

FileImage.displayName = 'FileImage';

export default FileImage;
export { FileImage };
