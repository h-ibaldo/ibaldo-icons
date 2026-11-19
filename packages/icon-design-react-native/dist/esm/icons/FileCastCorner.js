import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileCastCorner = forwardRef(function FileCastCorner(
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
    createElement(Path, {"d":"M20 22C20 21.448 20.448 21 21 21","key":"0"}),
    createElement(Path, {"d":"M16 22C16 19.239 18.239 17 21 17","key":"1"}),
    createElement(Path, {"d":"M12 22C12 17.029 16.029 13 21 13","key":"2"}),
    createElement(Path, {"d":"M9 18L5 18C3.895 18 3 17.105 3 16L3 8.243C3 7.447 3.316 6.684 3.879 6.121L7.121 2.879C7.684 2.316 8.447 2 9.243 2L14 2C15.105 2 16 2.895 16 4L16 11","key":"3"}),
    createElement(Path, {"d":"M9 2L9 7C9 7.552 8.552 8 8 8L3 8","key":"4"})
  );
});

FileCastCorner.displayName = 'FileCastCorner';

export default FileCastCorner;
export { FileCastCorner };
