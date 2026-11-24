import { createElement, forwardRef } from 'react';

const FileArrowDownPlain = forwardRef(function FileArrowDownPlain(
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
    createElement('path', {"d":"M6 22.034C4.895 22.034 4 21.138 4 20.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034","key":"0"}),
    createElement('path', {"d":"M9 19.034L12 22.034L15 19.034","key":"1"}),
    createElement('path', {"d":"M12 15.034L12 22.034","key":"2"})
  );
});

FileArrowDownPlain.displayName = 'FileArrowDownPlain';

export default FileArrowDownPlain;
export { FileArrowDownPlain };
