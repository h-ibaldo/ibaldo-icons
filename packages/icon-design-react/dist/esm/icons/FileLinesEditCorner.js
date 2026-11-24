import { createElement, forwardRef } from 'react';

const FileLinesEditCorner = forwardRef(function FileLinesEditCorner(
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
    createElement('path', {"d":"M21.414 21.243C22.195 20.462 22.195 19.195 21.414 18.414L16 13L13 13L13 16L18.414 21.414C19.195 22.195 20.462 22.195 21.243 21.414L21.414 21.243Z","key":"0"}),
    createElement('path', {"d":"M17 20L20 17","key":"1"}),
    createElement('path', {"d":"M18 21","key":"2"}),
    createElement('path', {"d":"M14 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L12.016 2C12.646 2 13.25 2.25 13.696 2.696L17.304 6.304C17.75 6.75 18 7.354 18 7.984L18 10","key":"3"}),
    createElement('path', {"d":"M12 2L12 7C12 7.552 12.448 8 13 8L18 8","key":"4"}),
    createElement('path', {"d":"M6 8L9 8","key":"5"}),
    createElement('path', {"d":"M6 12L9 12","key":"6"}),
    createElement('path', {"d":"M6 16L9 16","key":"7"})
  );
});

FileLinesEditCorner.displayName = 'FileLinesEditCorner';

export default FileLinesEditCorner;
export { FileLinesEditCorner };
