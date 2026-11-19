import { createElement, forwardRef } from 'react';

const FileArrowBendPlain = forwardRef(function FileArrowBendPlain(
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
    createElement('path', {"d":"M14 10L16 12L15.478 12.522C13.456 14.544 13.142 17.713 14.728 20.093L16 22L16 20.485C16 18.894 16.632 17.368 17.757 16.243L19 15L21 17L21 10L14 10Z","key":"0"}),
    createElement('path', {"d":"M19 6L19 4C19 2.895 18.105 2 17 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L11 22","key":"1"})
  );
});

FileArrowBendPlain.displayName = 'FileArrowBendPlain';

export default FileArrowBendPlain;
export { FileArrowBendPlain };
