import { createElement, forwardRef } from 'react';

const Stop = forwardRef(function Stop(
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
    createElement('path', {"d":"M5 4L19 4C19.555 4 20 4.449 20 5L20 19C20 19.555 19.555 20 19 20L5 20C4.445 20 4 19.555 4 19L4 5C4 4.449 4.445 4 5 4Z","key":"0"})
  );
});

Stop.displayName = 'Stop';

export default Stop;
export { Stop };
