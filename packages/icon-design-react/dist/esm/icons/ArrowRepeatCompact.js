import { createElement, forwardRef } from 'react';

const ArrowRepeatCompact = forwardRef(function ArrowRepeatCompact(
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
    createElement('polyline', {"points":"14.9999999995498 2 17.999999999689862 4.999999999869033 14.999999999829924 8","key":"0"}),
    createElement('path', {"d":"M4.000000000040018,13.000000000498403l-.000000000040018-1c-.000000000170076-3.865993248818995,3.134006750879962-7.000000000138243,6.999999999689862-7.000000000320142l7-.000000000309228","key":"1"}),
    createElement('polyline', {"points":"9.0000000004502 22.00000000026921 6.000000000310138 19.000000000409273 9.00000000018008 16.00000000026921","key":"2"}),
    createElement('path', {"d":"M19.999999999949978,10.999999999778083l.000000000050022,1c.000000000170076,3.865993248820814-3.134006750859953,7.000000000141881-6.999999999689862,7.000000000311047l-7,.000000000320142","key":"3"})
  );
});

ArrowRepeatCompact.displayName = 'ArrowRepeatCompact';

export default ArrowRepeatCompact;
export { ArrowRepeatCompact };
