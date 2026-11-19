import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileSearchPlain = forwardRef(function FileSearchPlain(
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
    createElement(Path, {"d":"M17 18.034","key":"0"}),
    createElement(Path, {"d":"M10 22.034L5 22.034C3.895 22.034 3 21.138 3 20.034L3 4.034C3 2.929 3.895 2.034 5 2.034L17 2.034C18.105 2.034 19 2.929 19 4.034L19 9.034","key":"1"}),
    createElement(Path, {"d":"M18 21.034","key":"2"}),
    createElement(Path, {"d":"M19 16.034C19 18.243 17.209 20.034 15 20.034C12.791 20.034 11 18.243 11 16.034C11 13.825 12.791 12.034 15 12.034C17.209 12.034 19 13.825 19 16.034Z","key":"3"}),
    createElement(Path, {"d":"M18 19.034L21 22.034","key":"4"})
  );
});

FileSearchPlain.displayName = 'FileSearchPlain';

export default FileSearchPlain;
export { FileSearchPlain };
