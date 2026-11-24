import { createElement, forwardRef } from 'react';

const FileCastPlain = forwardRef(function FileCastPlain(
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
    createElement('path', {"d":"M5 22.034C5 21.481 4.552 21.034 4 21.034","key":"0"}),
    createElement('path', {"d":"M9 22.034C9 19.272 6.761 17.034 4 17.034","key":"1"}),
    createElement('path', {"d":"M13 22.034C13 17.063 8.971 13.034 4 13.034","key":"2"}),
    createElement('path', {"d":"M4 9.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034L17 22.034","key":"3"})
  );
});

FileCastPlain.displayName = 'FileCastPlain';

export default FileCastPlain;
export { FileCastPlain };
