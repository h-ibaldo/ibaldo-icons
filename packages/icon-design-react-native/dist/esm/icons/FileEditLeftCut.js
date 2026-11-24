import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileEditLeftCut = forwardRef(function FileEditLeftCut(
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
    createElement(Path, {"d":"M5 18L5 20C5 21.105 5.895 22 7 22L19 22C20.105 22 21 21.105 21 20L21 7.828C21 7.298 20.789 6.789 20.414 6.414L16.586 2.586C16.211 2.211 15.702 2 15.172 2L7 2C5.895 2 5 2.895 5 4L5 5","key":"0"}),
    createElement(Path, {"d":"M3.293 10.464L4.879 8.879C5.269 8.488 5.902 8.488 6.293 8.879L12.414 15L12.414 18L9.414 18L3.293 11.879C2.902 11.488 2.902 10.855 3.293 10.464Z","key":"1"})
  );
});

FileEditLeftCut.displayName = 'FileEditLeftCut';

export default FileEditLeftCut;
export { FileEditLeftCut };
