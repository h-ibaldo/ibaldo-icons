import { createElement, forwardRef } from 'react';

const FileLockPlain = forwardRef(function FileLockPlain(
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
    createElement('path', {"d":"M4 9L4 4C4 2.895 4.895 2 6 2L18 2C19.105 2 20 2.895 20 4L20 20C20 21.105 19.105 22 18 22L16 22","key":"0"}),
    createElement('path', {"d":"M12 22L4 22L4 17L12 17L12 22Z","key":"1"}),
    createElement('path', {"d":"M5 17L5 15C5 13.343 6.343 12 8 12L8 12C9.657 12 11 13.343 11 15L11 17","key":"2"})
  );
});

FileLockPlain.displayName = 'FileLockPlain';

export default FileLockPlain;
export { FileLockPlain };
