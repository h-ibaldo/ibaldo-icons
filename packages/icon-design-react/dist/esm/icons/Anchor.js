import { createElement, forwardRef } from 'react';

const Anchor = forwardRef(function Anchor(
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
    createElement('path', {"d":"M14.5 4.5C14.5 5.883 13.383 7 12 7C10.617 7 9.5 5.883 9.5 4.5C9.5 3.117 10.617 2 12 2C13.383 2 14.5 3.117 14.5 4.5Z","key":"0"}),
    createElement('path', {"d":"M12 8L12 21","key":"1"}),
    createElement('path', {"d":"M9 12L15 12","key":"2"}),
    createElement('path', {"d":"M3.156 14C3.602 18.492 7.391 22 12 22C16.609 22 20.398 18.492 20.844 14","key":"3"}),
    createElement('path', {"d":"M19 15L21 13L22 16","key":"4"}),
    createElement('path', {"d":"M5 15L3 13L2 16","key":"5"})
  );
});

Anchor.displayName = 'Anchor';

export default Anchor;
export { Anchor };
