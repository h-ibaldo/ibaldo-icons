import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const FileMailPlain = forwardRef(function FileMailPlain(
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
    createElement(Path, {"d":"M21 22.034L11 22.034C10.448 22.034 10 21.586 10 21.034L10 14.335C10 13.783 10.448 13.335 11 13.335L21 13.335C21.552 13.335 22 13.783 22 14.335L22 21.034C22 21.586 21.552 22.034 21 22.034Z","key":"0"}),
    createElement(Path, {"d":"M10.325 13.607L15.309 18.373C15.695 18.742 16.305 18.742 16.691 18.373L21.675 13.607","key":"1"}),
    createElement(Path, {"d":"M19 10L19 4C19 2.895 18.105 2 17 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L7 22","key":"2"})
  );
});

FileMailPlain.displayName = 'FileMailPlain';

export default FileMailPlain;
export { FileMailPlain };
