import { createElement, forwardRef } from 'react';

const GlobeGridCurvedTilted = forwardRef(function GlobeGridCurvedTilted(
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
    createElement('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z","key":"0"}),
    createElement('path', {"d":"M2.522 15.162C5.176 13.845 7.668 12.09 9.879 9.879C12.09 7.668 13.845 5.176 15.162 2.522","key":"1"}),
    createElement('path', {"d":"M21.478 8.838C18.824 10.155 16.332 11.91 14.121 14.121C11.91 16.332 10.155 18.824 8.838 21.478","key":"2"}),
    createElement('path', {"d":"M9.172 14.828C12.065 17.722 15.741 19.17 19.071 19.071C19.17 15.741 17.722 12.065 14.828 9.172C11.935 6.278 8.259 4.83 4.929 4.929C4.83 8.259 6.278 11.935 9.172 14.828Z","key":"3"})
  );
});

GlobeGridCurvedTilted.displayName = 'GlobeGridCurvedTilted';

export default GlobeGridCurvedTilted;
export { GlobeGridCurvedTilted };
