import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileUserDoubleCut = forwardRef(function FileUserDoubleCut(
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
    createElement(Path, {"d":"M10 15C10 16.657 8.657 18 7 18C5.343 18 4 16.657 4 15C4 13.343 5.343 12 7 12C8.657 12 10 13.343 10 15Z","key":"0"}),
    createElement(Path, {"d":"M12 22L12 22C12 19.791 10.209 18 8 18L6 18C3.791 18 2 19.791 2 22L2 22","key":"1"}),
    createElement(Path, {"d":"M18 22C18 19.791 16.209 18 14 18","key":"2"}),
    createElement(Path, {"d":"M14 17.816C15.163 17.403 16 16.304 16 15C16 13.343 14.657 12 13 12","key":"3"}),
    createElement(Path, {"d":"M22 22L22 7.828C22 7.298 21.789 6.789 21.414 6.414L17.586 2.586C17.211 2.211 16.702 2 16.172 2L8 2C6.895 2 6 2.895 6 4L6 8","key":"4"})
  );
});

FileUserDoubleCut.displayName = 'FileUserDoubleCut';

export default FileUserDoubleCut;
export { FileUserDoubleCut };
