import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileLinesLeft = forwardRef(function FileLinesLeft(
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
    createElement(Path, {"d":"M20 20L20 7.828C20 7.298 19.789 6.789 19.414 6.414L15.586 2.586C15.211 2.211 14.702 2 14.172 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L18 22C19.105 22 20 21.105 20 20Z","key":"0"}),
    createElement(Path, {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8","key":"1"}),
    createElement(Path, {"d":"M8 14L16 14","key":"2"}),
    createElement(Path, {"d":"M8 8L10 8","key":"3"}),
    createElement(Path, {"d":"M8 18L11 18","key":"4"})
  );
});

FileLinesLeft.displayName = 'FileLinesLeft';

export default FileLinesLeft;
export { FileLinesLeft };
