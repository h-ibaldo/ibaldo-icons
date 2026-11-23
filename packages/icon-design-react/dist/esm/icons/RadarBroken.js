import { createElement, forwardRef } from 'react';

const RadarBroken = forwardRef(function RadarBroken(
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
    createElement('path', {"d":"M10.586 10.586C11.367 9.805 12.633 9.805 13.414 10.586C14.195 11.367 14.195 12.633 13.414 13.414C12.633 14.195 11.367 14.195 10.586 13.414C9.805 12.633 9.805 11.367 10.586 10.586Z","key":"0"}),
    createElement('path', {"d":"M13.414 10.586L19.07 4.93","key":"1"}),
    createElement('path', {"d":"M17.93 11.07C17.977 11.375 18 11.684 18 12C18 15.246 15.422 17.891 12.203 17.996","key":"2"}),
    createElement('path', {"d":"M6.895 15.152C6.328 14.234 6 13.156 6 12C6 8.688 8.688 6 12 6C13.656 6 15.156 6.672 16.242 7.758","key":"3"}),
    createElement('path', {"d":"M21.117 7.883C21.684 9.141 22 10.531 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 11.195 2.094 10.41 2.277 9.66C2.305 9.535 2.336 9.414 2.371 9.293","key":"4"}),
    createElement('path', {"d":"M6.219 3.84C6.344 3.75 6.477 3.66 6.609 3.578C8.164 2.578 10.016 2 12 2C14.762 2 17.262 3.121 19.07 4.93","key":"5"}),
    createElement('path', {"d":"M9.235 17.326L9.235 17.326","key":"6"}),
    createElement('path', {"d":"M3.767 6.322L3.767 6.322","key":"7"})
  );
});

RadarBroken.displayName = 'RadarBroken';

export default RadarBroken;
export { RadarBroken };
