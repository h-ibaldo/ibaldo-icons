import { createElement, forwardRef } from 'react';

const FileArrowInPlain = forwardRef(function FileArrowInPlain(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M9 22.034L12 19.034L9 16.034","key":"0"}),
    createElement('path', {"d":"M4 19.034L12 19.034","key":"1"}),
    createElement('path', {"d":"M4 14.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034L16 22.034","key":"2"})
  );
});

FileArrowInPlain.displayName = 'FileArrowInPlain';

export default FileArrowInPlain;
export { FileArrowInPlain };
