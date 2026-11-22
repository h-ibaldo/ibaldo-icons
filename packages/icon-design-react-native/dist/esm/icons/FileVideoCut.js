import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileVideoCut = forwardRef(function FileVideoCut(
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
    createElement(Path, {"d":"M19 10L19 7.828C19 7.297 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.703 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L6 22","key":"0"}),
    createElement(Path, {"d":"M17 15L17 14.152C17 13.516 16.484 13 15.844 13L10.156 13C9.516 13 9 13.516 9 14.152L9 19.848C9 20.484 9.516 21 10.156 21L15.844 21C16.484 21 17 20.484 17 19.848L17 19L20.277 20.641C20.609 20.805 21 20.563 21 20.191L21 13.809C21 13.438 20.609 13.195 20.277 13.359Z","key":"1"})
  );
});

FileVideoCut.displayName = 'FileVideoCut';

export default FileVideoCut;
export { FileVideoCut };
