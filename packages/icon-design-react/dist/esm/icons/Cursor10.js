import { createElement, forwardRef } from 'react';

const Cursor10 = forwardRef(function Cursor10(
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
    createElement('path', {"d":"M9,21.970769791338171l.000008920840628-6.000087301210442-5.000008920840628.00000465435005L12.029418957250527,1.970687144486874l7.970581042749473,14.000082646851297-5-.000082646860392-.000008920840628,6.000087301210442-5.999991079159372-.00000465435005Z","key":"0"})
  );
});

Cursor10.displayName = 'Cursor10';

export default Cursor10;
export { Cursor10 };
