import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileArrowUturnRight = forwardRef(function FileArrowUturnRight(
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
    createElement(Path, {"d":"M19 18L21 20L19 22","key":"0"}),
    createElement(Path, {"d":"M20 20L15 20C13.343 20 12 18.657 12 17L12 17C12 15.343 13.343 14 15 14L16 14","key":"1"}),
    createElement(Path, {"d":"M19 12L19 7.984C19 7.354 18.75 6.75 18.304 6.304L14.696 2.696C14.25 2.25 13.646 2 13.016 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L10 22","key":"2"}),
    createElement(Path, {"d":"M13 2L13 7C13 7.552 13.448 8 14 8L19 8","key":"3"})
  );
});

FileArrowUturnRight.displayName = 'FileArrowUturnRight';

export default FileArrowUturnRight;
export { FileArrowUturnRight };
