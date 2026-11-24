import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileChartBarCorner = forwardRef(function FileChartBarCorner(
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
    createElement(Path, {"d":"M20 13L20 7.984C20 7.355 19.75 6.75 19.305 6.305L15.695 2.695C15.25 2.25 14.645 2 14.016 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L8 22","key":"0"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.551 14.449 8 15 8L20 8","key":"1"}),
    createElement(Path, {"d":"M12 22L12 18","key":"2"}),
    createElement(Path, {"d":"M16 22L16 14","key":"3"}),
    createElement(Path, {"d":"M20 22L20 17","key":"4"})
  );
});

FileChartBarCorner.displayName = 'FileChartBarCorner';

export default FileChartBarCorner;
export { FileChartBarCorner };
