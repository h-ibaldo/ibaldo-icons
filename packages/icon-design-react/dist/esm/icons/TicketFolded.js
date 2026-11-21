import { createElement, forwardRef } from 'react';

const TicketFolded = forwardRef(function TicketFolded(
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
    createElement('path', {"d":"M6 8L6 10","key":"0"}),
    createElement('path', {"d":"M6 13L6 14","key":"1"}),
    createElement('path', {"d":"M6 17L6 18","key":"2"}),
    createElement('path', {"d":"M2 8L22 8L22 20L2 20Z","key":"3"}),
    createElement('path', {"d":"M2 8L19 3L19 8","key":"4"})
  );
});

TicketFolded.displayName = 'TicketFolded';

export default TicketFolded;
export { TicketFolded };
