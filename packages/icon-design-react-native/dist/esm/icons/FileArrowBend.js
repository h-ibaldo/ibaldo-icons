import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileArrowBend = forwardRef(function FileArrowBend(
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
    createElement(Path, {"d":"M19 6L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L11 22","key":"0"}),
    createElement(Path, {"d":"M9 2L9 7C9 7.552 8.552 8 8 8L3 8","key":"1"}),
    createElement(Path, {"d":"M14 10L16 12L15.478 12.522C13.456 14.544 13.142 17.713 14.728 20.093L16 22L16 20.485C16 18.894 16.632 17.368 17.757 16.243L19 15L21 17L21 10L14 10Z","key":"2"})
  );
});

FileArrowBend.displayName = 'FileArrowBend';

export default FileArrowBend;
export { FileArrowBend };
