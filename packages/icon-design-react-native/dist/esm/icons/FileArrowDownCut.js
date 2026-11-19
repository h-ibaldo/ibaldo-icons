import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileArrowDownCut = forwardRef(function FileArrowDownCut(
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
    createElement(Path, {"d":"M6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.172 2C14.702 2 15.211 2.211 15.586 2.586L19.414 6.414C19.789 6.789 20 7.298 20 7.828L20 20C20 21.105 19.105 22 18 22","key":"0"}),
    createElement(Path, {"d":"M9 19L12 22L15 19","key":"1"}),
    createElement(Path, {"d":"M12 15L12 22","key":"2"})
  );
});

FileArrowDownCut.displayName = 'FileArrowDownCut';

export default FileArrowDownCut;
export { FileArrowDownCut };
