import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileTable = forwardRef(function FileTable(
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
    createElement(Path, {"d":"M19 9L19 7.984C19 7.355 18.75 6.75 18.305 6.305L14.695 2.695C14.25 2.25 13.645 2 13.016 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L6 22","key":"0"}),
    createElement(Path, {"d":"M13 2L13 7C13 7.551 13.449 8 14 8L19 8","key":"1"}),
    createElement(Path, {"d":"M9 12L21 12L21 22L9 22Z","key":"2"}),
    createElement(Path, {"d":"M9 17L21 17","key":"3"}),
    createElement(Path, {"d":"M13 12L13 21.5","key":"4"})
  );
});

FileTable.displayName = 'FileTable';

export default FileTable;
export { FileTable };
