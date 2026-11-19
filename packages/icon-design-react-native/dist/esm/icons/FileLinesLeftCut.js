import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileLinesLeftCut = forwardRef(function FileLinesLeftCut(
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
    createElement(Path, {"d":"M8 15L16 15","key":"1"}),
    createElement(Path, {"d":"M8 12L16 12","key":"2"}),
    createElement(Path, {"d":"M8 7L12 7","key":"3"}),
    createElement(Path, {"d":"M8 18L12 18","key":"4"})
  );
});

FileLinesLeftCut.displayName = 'FileLinesLeftCut';

export default FileLinesLeftCut;
export { FileLinesLeftCut };
