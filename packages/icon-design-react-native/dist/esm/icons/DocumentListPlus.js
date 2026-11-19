import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DocumentListPlus = forwardRef(function DocumentListPlus(
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
    createElement(Path, {"d":"M12 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 14","key":"0"}),
    createElement(Path, {"d":"M7 7L7 7","key":"1"}),
    createElement(Path, {"d":"M17 7L11 7","key":"2"}),
    createElement(Path, {"d":"M7 12L7 12","key":"3"}),
    createElement(Path, {"d":"M17 12L11 12","key":"4"}),
    createElement(Path, {"d":"M7 17L7 17","key":"5"}),
    createElement(Path, {"d":"M12 17L11 17","key":"6"}),
    createElement(Path, {"d":"M18 16L18 22","key":"7"}),
    createElement(Path, {"d":"M21 19L15 19","key":"8"})
  );
});

DocumentListPlus.displayName = 'DocumentListPlus';

export default DocumentListPlus;
export { DocumentListPlus };
