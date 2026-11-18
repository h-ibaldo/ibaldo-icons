import { createElement, forwardRef } from 'react';

const TrophyCircle = forwardRef(function TrophyCircle(
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
    createElement('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z","key":"0"}),
    createElement('path', {"d":"M12 15C10.344 15 9 13.656 9 12L9 7L15 7L15 12C15 13.656 13.656 15 12 15Z","key":"1"}),
    createElement('path', {"d":"M10 18L14 18","key":"2"}),
    createElement('path', {"d":"M12 15L12 18","key":"3"}),
    createElement('path', {"d":"M14.852 12.891L17.07 11.559C17.648 11.211 18 10.586 18 9.914C18 8.859 17.145 8 16.086 8L15 8","key":"4"}),
    createElement('path', {"d":"M9.148 12.891L6.93 11.559C6.352 11.211 6 10.586 6 9.914C6 8.859 6.855 8 7.914 8L9 8","key":"5"})
  );
});

TrophyCircle.displayName = 'TrophyCircle';

export default TrophyCircle;
export { TrophyCircle };
