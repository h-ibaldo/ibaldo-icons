import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileTriangle = forwardRef(function FileTriangle(
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
    createElement(Path, {"d":"M19 11L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L8 22","key":"0"}),
    createElement(Path, {"d":"M9 2L9 7C9 7.552 8.552 8 8 8L3 8","key":"1"}),
    createElement(Path, {"d":"M12.796 22L19.498 22C20.664 22 21.384 20.728 20.784 19.728L17.433 14.144C16.851 13.173 15.443 13.173 14.861 14.144L11.51 19.728C10.91 20.728 11.63 22 12.796 22Z","key":"2"})
  );
});

FileTriangle.displayName = 'FileTriangle';

export default FileTriangle;
export { FileTriangle };
