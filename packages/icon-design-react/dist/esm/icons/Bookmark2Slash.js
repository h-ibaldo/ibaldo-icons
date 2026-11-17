import { createElement, forwardRef } from 'react';

const Bookmark2Slash = forwardRef(function Bookmark2Slash(
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
    createElement('path', {"d":"M19,8.999999999998181v-4.000002999999197c0-1.656852592641371,1.343144416809082-2.999997000000803,2.999996999998984-2.999997000000803h.000003000001016H7","key":"0"}),
    createElement('polyline', {"points":"5 5.649999999997817 5 21.999999999998181 12 17.999999995146936 19 21.999999999998181 19 13.349999999998545","key":"1"}),
    createElement('line', {"x1":"2","y1":"3.999999999998181","x2":"22","y2":"14.999999999998181","key":"2"})
  );
});

Bookmark2Slash.displayName = 'Bookmark2Slash';

export default Bookmark2Slash;
export { Bookmark2Slash };
