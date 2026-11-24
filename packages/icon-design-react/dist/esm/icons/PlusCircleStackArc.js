import { createElement, forwardRef } from 'react';

const PlusCircleStackArc = forwardRef(function PlusCircleStackArc(
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
    createElement('path', {"d":"M7 14.5C7 10.359 10.355 7 14.5 7C18.645 7 22 10.359 22 14.5C22 18.641 18.645 22 14.5 22C10.355 22 7 18.641 7 14.5Z","key":"0"}),
    createElement('path', {"d":"M3.512 14C2.566 12.746 2 11.191 2 9.5C2 5.359 5.359 2 9.5 2C11.191 2 12.746 2.566 14 3.512","key":"1"}),
    createElement('path', {"d":"M14.5 11.5L14.5 17.5","key":"2"}),
    createElement('path', {"d":"M17.5 14.5L11.5 14.5","key":"3"})
  );
});

PlusCircleStackArc.displayName = 'PlusCircleStackArc';

export default PlusCircleStackArc;
export { PlusCircleStackArc };
