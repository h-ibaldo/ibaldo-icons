import { createElement, forwardRef } from 'react';

const TicketScalloped = forwardRef(function TicketScalloped(
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
    createElement('path', {"d":"M7 9L7 15","key":"0"}),
    createElement('path', {"d":"M17 9L17 15","key":"1"}),
    createElement('path', {"d":"M2 9C3.656 9 5 7.656 5 6L19 6C19 7.656 20.344 9 22 9L22 15C20.344 15 19 16.344 19 18L5 18C5 16.344 3.656 15 2 15Z","key":"2"})
  );
});

TicketScalloped.displayName = 'TicketScalloped';

export default TicketScalloped;
export { TicketScalloped };
