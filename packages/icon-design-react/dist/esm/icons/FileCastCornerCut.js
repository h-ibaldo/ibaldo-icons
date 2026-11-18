import { createElement, forwardRef } from 'react';

const FileCastCornerCut = forwardRef(function FileCastCornerCut(
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
    createElement('path', {"d":"M21 22C21 21.448 21.448 21 22 21","key":"0"}),
    createElement('path', {"d":"M17 22C17 19.239 19.239 17 22 17","key":"1"}),
    createElement('path', {"d":"M13 22C13 17.029 17.029 13 22 13","key":"2"}),
    createElement('path', {"d":"M10 19L6 19C4.895 19 4 18.105 4 17L4 8.243C4 7.447 4.316 6.684 4.879 6.121L7.121 3.879C7.684 3.316 8.447 3 9.243 3L15 3C16.105 3 17 3.895 17 5L17 11","key":"3"})
  );
});

FileCastCornerCut.displayName = 'FileCastCornerCut';

export default FileCastCornerCut;
export { FileCastCornerCut };
