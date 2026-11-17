import { createElement, forwardRef } from 'react';

const GaugeTeardropTicksSquare = forwardRef(function GaugeTeardropTicksSquare(
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
    createElement('path', {"d":"M18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22Z","key":"0"}),
    createElement('path', {"d":"M16.242 7.758L10.574 10.023C9.707 10.371 9.09 11.156 8.957 12.082C8.711 13.809 10.191 15.289 11.918 15.043C12.844 14.91 13.629 14.293 13.977 13.422Z","key":"1"}),
    createElement('path', {"d":"M12 2L12 4","key":"2"}),
    createElement('path', {"d":"M12 20L12 22","key":"3"}),
    createElement('path', {"d":"M22 12L20 12","key":"4"}),
    createElement('path', {"d":"M4 12L2 12","key":"5"})
  );
});

GaugeTeardropTicksSquare.displayName = 'GaugeTeardropTicksSquare';

export default GaugeTeardropTicksSquare;
export { GaugeTeardropTicksSquare };
