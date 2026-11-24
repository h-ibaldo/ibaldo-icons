import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileLinesEditCornerCut = forwardRef(function FileLinesEditCornerCut(
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
    createElement(Path, {"d":"M21.414 21.243C22.195 20.462 22.195 19.195 21.414 18.414L16 13L13 13L13 16L18.414 21.414C19.195 22.195 20.462 22.195 21.243 21.414L21.414 21.243Z","key":"0"}),
    createElement(Path, {"d":"M17 20L20 17","key":"1"}),
    createElement(Path, {"d":"M18 21","key":"2"}),
    createElement(Path, {"d":"M19 11L19 7.828C19 7.298 18.789 6.789 18.414 6.414L14.586 2.586C14.211 2.211 13.702 2 13.172 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L14 22","key":"3"}),
    createElement(Path, {"d":"M7 8L14 8","key":"4"}),
    createElement(Path, {"d":"M7 12L9 12","key":"5"}),
    createElement(Path, {"d":"M7 16L9 16","key":"6"})
  );
});

FileLinesEditCornerCut.displayName = 'FileLinesEditCornerCut';

export default FileLinesEditCornerCut;
export { FileLinesEditCornerCut };
