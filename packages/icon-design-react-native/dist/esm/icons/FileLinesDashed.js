import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileLinesDashed = forwardRef(function FileLinesDashed(
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
    createElement(Path, {"d":"M20.001 20L20.001 7.828C20.001 7.298 19.79 6.789 19.415 6.414L15.587 2.586C15.212 2.211 14.703 2 14.173 2L6.001 2C4.897 2 4.001 2.895 4.001 4L4.001 20C4.001 21.105 4.897 22 6.001 22L18.001 22C19.106 22 20.001 21.105 20.001 20Z","key":"0"}),
    createElement(Path, {"d":"M14.001 2L14.001 7C14.001 7.552 14.449 8 15.001 8L20.001 8","key":"1"}),
    createElement(Path, {"d":"M8.001 13L16.001 13","key":"2"}),
    createElement(Path, {"d":"M8.001 9L10.001 9","key":"3"}),
    createElement(Path, {"d":"M8.001 17L11.001 17","key":"4"}),
    createElement(Path, {"d":"M15.001 17L15.001 17","key":"5"})
  );
});

FileLinesDashed.displayName = 'FileLinesDashed';

export default FileLinesDashed;
export { FileLinesDashed };
