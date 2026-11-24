import { createElement, forwardRef } from 'react';

const TicketTilted = forwardRef(function TicketTilted(
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
    createElement('path', {"d":"M7.484 4.66L10 2L22 14L19.484 16.66C19.129 16.336 18.66 16.141 18.141 16.141C17.039 16.141 16.141 17.039 16.141 18.141C16.141 18.66 16.336 19.129 16.66 19.484L14 22L2 10L4.66 7.484C5.012 7.805 5.484 8 6 8C7.105 8 8 7.105 8 6C8 5.484 7.805 5.012 7.484 4.66Z","key":"0"}),
    createElement('path', {"d":"M7 13L8 12","key":"1"}),
    createElement('path', {"d":"M13 7L14 6","key":"2"}),
    createElement('path', {"d":"M11 9L10 10","key":"3"})
  );
});

TicketTilted.displayName = 'TicketTilted';

export default TicketTilted;
export { TicketTilted };
