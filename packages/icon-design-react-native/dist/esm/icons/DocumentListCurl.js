import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const DocumentListCurl = forwardRef(function DocumentListCurl(
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
    createElement(Path, {"d":"M18 2L6 2C4.895 2 4 2.895 4 4L4 20C4 21.105 4.895 22 6 22L15.172 22C15.703 22 16.211 21.789 16.586 21.414L19.414 18.586C19.789 18.211 20 17.703 20 17.172L20 4C20 2.895 19.105 2 18 2Z","key":"0"}),
    createElement(Path, {"d":"M15 22L15 17L20 17","key":"1"}),
    createElement(Path, {"d":"M11 6L16 6","key":"2"}),
    createElement(Path, {"d":"M8 6L8 6","key":"3"}),
    createElement(Path, {"d":"M11 10L16 10","key":"4"}),
    createElement(Path, {"d":"M8 10L8 10","key":"5"}),
    createElement(Path, {"d":"M11 14L16 14","key":"6"}),
    createElement(Path, {"d":"M8 14L8 14","key":"7"})
  );
});

DocumentListCurl.displayName = 'DocumentListCurl';

export default DocumentListCurl;
export { DocumentListCurl };
