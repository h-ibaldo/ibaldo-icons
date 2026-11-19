import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DocumentList = forwardRef(function DocumentList(
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
    createElement(Path, {"d":"M19 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 20C21 21.105 20.105 22 19 22Z","key":"0"}),
    createElement(Path, {"d":"M7 7L7 7","key":"1"}),
    createElement(Path, {"d":"M17 7L10 7","key":"2"}),
    createElement(Path, {"d":"M7 12L7 12","key":"3"}),
    createElement(Path, {"d":"M17 12L10 12","key":"4"}),
    createElement(Path, {"d":"M7 17L7 17","key":"5"}),
    createElement(Path, {"d":"M17 17L10 17","key":"6"})
  );
});

DocumentList.displayName = 'DocumentList';

export default DocumentList;
export { DocumentList };
