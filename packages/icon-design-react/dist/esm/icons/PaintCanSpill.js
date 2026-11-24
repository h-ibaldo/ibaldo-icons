import { createElement, forwardRef } from 'react';

const PaintCanSpill = forwardRef(function PaintCanSpill(
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
    createElement('path', {"d":"M11 4C12.273 2.727 15.316 3.711 17.805 6.195C20.289 8.684 21.273 11.727 20 13","key":"0"}),
    createElement('path', {"d":"M19.875 9L11.715 9","key":"1"}),
    createElement('path', {"d":"M14 12L14 13C14 14.105 14.895 15 16 15L17 15L17 18.5C17 19.328 17.672 20 18.5 20C19.328 20 20 19.328 20 18.5L20 13","key":"2"}),
    createElement('path', {"d":"M17 16L12 21C10.727 22.273 7.684 21.289 5.195 18.805C2.711 16.316 1.727 13.273 3 12L11 4C9.727 5.273 10.711 8.316 13.195 10.805C13.461 11.066 13.727 11.313 14 11.539","key":"3"}),
    createElement('path', {"d":"M9.027 13L4.609 7.477C3.164 5.672 4.449 3 6.762 3C7.566 3 8.328 3.352 8.852 3.961L9.859 5.141","key":"4"})
  );
});

PaintCanSpill.displayName = 'PaintCanSpill';

export default PaintCanSpill;
export { PaintCanSpill };
