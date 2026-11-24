import { createElement, forwardRef } from 'react';

const GaugeTeardropFlat = forwardRef(function GaugeTeardropFlat(
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
    createElement('path', {"d":"M17.988 21L6.016 21C4.305 19.723 2.984 17.898 2.367 15.688C0.887 10.363 3.996 4.852 9.316 3.367C14.637 1.887 20.152 5 21.633 10.316C22.773 14.406 21.191 18.602 17.988 21Z","key":"0"}),
    createElement('path', {"d":"M16.242 8.758L13.977 14.422C13.629 15.293 12.844 15.91 11.918 16.043C10.191 16.289 8.711 14.809 8.961 13.082C9.09 12.156 9.707 11.371 10.578 11.023Z","key":"1"})
  );
});

GaugeTeardropFlat.displayName = 'GaugeTeardropFlat';

export default GaugeTeardropFlat;
export { GaugeTeardropFlat };
