import { createElement, forwardRef } from 'react';

const FileCastCornerPlain = forwardRef(function FileCastCornerPlain(
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
    createElement('path', {"d":"M21 22.034C21 21.481 21.448 21.034 22 21.034","key":"0"}),
    createElement('path', {"d":"M17 22.034C17 19.272 19.239 17.034 22 17.034","key":"1"}),
    createElement('path', {"d":"M13 22.034C13 17.063 17.029 13.034 22 13.034","key":"2"}),
    createElement('path', {"d":"M10 19.034L6 19.034C4.895 19.034 4 18.138 4 17.034L4 5.034C4 3.929 4.895 3.034 6 3.034L15 3.034C16.105 3.034 17 3.929 17 5.034L17 11.034","key":"3"})
  );
});

FileCastCornerPlain.displayName = 'FileCastCornerPlain';

export default FileCastCornerPlain;
export { FileCastCornerPlain };
