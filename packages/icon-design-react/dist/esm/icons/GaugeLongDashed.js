import { createElement, forwardRef } from 'react';

const GaugeLongDashed = forwardRef(function GaugeLongDashed(
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
    createElement('path', {"d":"M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z","key":"0"}),
    createElement('path', {"d":"M19 5L13.414 10.586","key":"1"}),
    createElement('path', {"d":"M10.586 13.414L9 15","key":"2"}),
    createElement('path', {"d":"M3.285 16.906C4.078 18.32 5.23 19.563 6.703 20.48C8.352 21.512 10.188 21.992 12 21.992","key":"3"}),
    createElement('path', {"d":"M3.219 7.242C2.301 8.934 1.918 10.781 2.023 12.586","key":"4"}),
    createElement('path', {"d":"M16.383 20.977C18.012 20.184 19.449 18.949 20.48 17.297C22.996 13.27 22.289 8.152 19.066 4.934","key":"5"}),
    createElement('path', {"d":"M15.25 2.551C14.691 2.359 14.129 2.211 13.559 2.121","key":"6"}),
    createElement('path', {"d":"M9.07 2.449C8.047 2.762 7.07 3.234 6.188 3.863","key":"7"})
  );
});

GaugeLongDashed.displayName = 'GaugeLongDashed';

export default GaugeLongDashed;
export { GaugeLongDashed };
