import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileFilterCut = forwardRef(function FileFilterCut(
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
    createElement(Path, {"d":"M12 13L22 13L22 14.519C22 14.823 21.862 15.11 21.625 15.3L17 19L12.375 15.3C12.138 15.11 12 14.823 12 14.519L12 13Z","key":"0"}),
    createElement(Path, {"d":"M17 19L17 22","key":"1"}),
    createElement(Path, {"d":"M20 9L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L12 22","key":"2"})
  );
});

FileFilterCut.displayName = 'FileFilterCut';

export default FileFilterCut;
export { FileFilterCut };
