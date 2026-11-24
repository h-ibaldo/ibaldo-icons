import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileRefreshCut = forwardRef(function FileRefreshCut(
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
    createElement(Path, {"d":"M11 22L11 19L14 19","key":"0"}),
    createElement(Path, {"d":"M11.422 19C12.194 20.764 13.951 22 16 22C18.761 22 21 19.761 21 17C21 14.239 18.761 12 16 12C13.951 12 12.194 13.236 11.422 15","key":"1"}),
    createElement(Path, {"d":"M20 9L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L7 22","key":"2"})
  );
});

FileRefreshCut.displayName = 'FileRefreshCut';

export default FileRefreshCut;
export { FileRefreshCut };
