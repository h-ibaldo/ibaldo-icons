import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileUserPlain = forwardRef(function FileUserPlain(
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
    createElement(Path, {"d":"M4 9.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034L17 22.034","key":"0"}),
    createElement(Path, {"d":"M11 15.034C11 16.691 9.657 18.034 8 18.034C6.343 18.034 5 16.691 5 15.034C5 13.377 6.343 12.034 8 12.034C9.657 12.034 11 13.377 11 15.034Z","key":"1"}),
    createElement(Path, {"d":"M13 22.034L13 22.034C13 19.825 11.209 18.034 9 18.034L7 18.034C4.791 18.034 3 19.825 3 22.034L3 22.034","key":"2"})
  );
});

FileUserPlain.displayName = 'FileUserPlain';

export default FileUserPlain;
export { FileUserPlain };
