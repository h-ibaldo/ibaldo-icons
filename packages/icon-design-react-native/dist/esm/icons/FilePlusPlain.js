import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FilePlusPlain = forwardRef(function FilePlusPlain(
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
    createElement(Path, {"d":"M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L18 2C19.105 2 20 2.895 20 4L20 20C20 21.105 19.105 22 18 22Z","key":"0"}),
    createElement(Path, {"d":"M12 9L12 15","key":"1"}),
    createElement(Path, {"d":"M15 12L9 12","key":"2"})
  );
});

FilePlusPlain.displayName = 'FilePlusPlain';

export default FilePlusPlain;
export { FilePlusPlain };
