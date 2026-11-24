import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DocumentChecklistPlus = forwardRef(function DocumentChecklistPlus(
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
    createElement(Path, {"d":"M13 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 12","key":"0"}),
    createElement(Path, {"d":"M16 7L12 7","key":"1"}),
    createElement(Path, {"d":"M16 12L12 12","key":"2"}),
    createElement(Path, {"d":"M13 17L12 17","key":"3"}),
    createElement(Path, {"d":"M6 7L7 8L9 6","key":"4"}),
    createElement(Path, {"d":"M6 12L7 13L9 11","key":"5"}),
    createElement(Path, {"d":"M6 17L7 18L9 16","key":"6"}),
    createElement(Path, {"d":"M19 16L19 22","key":"7"}),
    createElement(Path, {"d":"M22 19L16 19","key":"8"})
  );
});

DocumentChecklistPlus.displayName = 'DocumentChecklistPlus';

export default DocumentChecklistPlus;
export { DocumentChecklistPlus };
