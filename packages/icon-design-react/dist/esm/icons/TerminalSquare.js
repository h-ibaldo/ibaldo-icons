import { createElement, forwardRef } from 'react';

const TerminalSquare = forwardRef(function TerminalSquare(
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
    createElement('path', {"d":"M7.109 8.406L10.609 11.906L7.109 15.406","key":"0"}),
    createElement('path', {"d":"M12.109 15.406L17.109 15.406","key":"1"}),
    createElement('path', {"d":"M6 4L18 4C19.656 4 21 5.344 21 7L21 17C21 18.656 19.656 20 18 20L6 20C4.344 20 3 18.656 3 17L3 7C3 5.344 4.344 4 6 4Z","key":"2"})
  );
});

TerminalSquare.displayName = 'TerminalSquare';

export default TerminalSquare;
export { TerminalSquare };
