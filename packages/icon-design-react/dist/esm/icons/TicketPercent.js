import { createElement, forwardRef } from 'react';

const TicketPercent = forwardRef(function TicketPercent(
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
    createElement('path', {"d":"M2 9L2 6L22 6L22 9C20.344 9 19 10.344 19 12C19 13.656 20.344 15 22 15L22 18L2 18L2 15C3.656 15 5 13.656 5 12C5 10.344 3.656 9 2 9Z","key":"0"}),
    createElement('path', {"d":"M10 14L14 10","key":"1"}),
    createElement('path', {"d":"M10 10L10 10","key":"2"}),
    createElement('path', {"d":"M14 14L14 14","key":"3"})
  );
});

TicketPercent.displayName = 'TicketPercent';

export default TicketPercent;
export { TicketPercent };
