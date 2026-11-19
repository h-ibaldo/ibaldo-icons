import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileLinesEditPlain = forwardRef(function FileLinesEditPlain(
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
    createElement(Path, {"d":"M18 20.034C18 21.138 17.105 22.034 16 22.034L4 22.034C2.895 22.034 2 21.138 2 20.034L2 4.034C2 2.929 2.895 2.034 4 2.034L16 2.034C17.105 2.034 18 2.929 18 4.034L18 4.534","key":"0"}),
    createElement(Path, {"d":"M21.707 9.912L20.121 8.327C19.731 7.936 19.098 7.936 18.707 8.327L12 15.034L12 18.034L15 18.034L21.707 11.327C22.098 10.936 22.098 10.303 21.707 9.912Z","key":"1"}),
    createElement(Path, {"d":"M7 7.034L13 7.034","key":"2"}),
    createElement(Path, {"d":"M7 11.034L10 11.034","key":"3"}),
    createElement(Path, {"d":"M7 15.034L8 15.034","key":"4"})
  );
});

FileLinesEditPlain.displayName = 'FileLinesEditPlain';

export default FileLinesEditPlain;
export { FileLinesEditPlain };
