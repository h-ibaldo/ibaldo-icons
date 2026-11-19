import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileBan = forwardRef(function FileBan(
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
    createElement(Path, {"d":"M19.536 13.464L12.464 20.536","key":"0"}),
    createElement(Path, {"d":"M11 17C11 14.239 13.239 12 16 12C18.761 12 21 14.239 21 17C21 19.761 18.761 22 16 22C13.239 22 11 19.761 11 17Z","key":"1"}),
    createElement(Path, {"d":"M19 9L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L9 22","key":"2"}),
    createElement(Path, {"d":"M9 2L9 7C9 7.552 8.552 8 8 8L3 8","key":"3"})
  );
});

FileBan.displayName = 'FileBan';

export default FileBan;
export { FileBan };
