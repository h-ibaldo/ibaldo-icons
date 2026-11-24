import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileSync = forwardRef(function FileSync(
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
    createElement(Path, {"d":"M21 12L21 15L18 15","key":"0"}),
    createElement(Path, {"d":"M11 22L11 19L14 19","key":"1"}),
    createElement(Path, {"d":"M20.578 19C19.806 20.764 18.049 22 16 22C13.951 22 12.194 20.764 11.422 19","key":"2"}),
    createElement(Path, {"d":"M11.431 15C12.204 13.238 13.952 12 16 12C18.049 12 19.806 13.236 20.578 15","key":"3"}),
    createElement(Path, {"d":"M19 8L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L7 22","key":"4"}),
    createElement(Path, {"d":"M9 2L9 7C9 7.552 8.552 8 8 8L3 8","key":"5"})
  );
});

FileSync.displayName = 'FileSync';

export default FileSync;
export { FileSync };
