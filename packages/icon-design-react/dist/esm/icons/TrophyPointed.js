import { createElement, forwardRef } from 'react';

const TrophyPointed = forwardRef(function TrophyPointed(
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
    createElement('path', {"d":"M8 22L16 22","key":"0"}),
    createElement('path', {"d":"M12 18L12 22","key":"1"}),
    createElement('path', {"d":"M15.949 13.949L12 17.898L8.051 13.949C6.738 12.637 6 10.855 6 9L6 2L18 2L18 9C18 10.855 17.262 12.637 15.949 13.949Z","key":"2"}),
    createElement('path', {"d":"M17.648 11.176L20.293 9.855C21.34 9.332 22 8.262 22 7.09C22 5.383 20.617 4 18.91 4L18 4","key":"3"}),
    createElement('path', {"d":"M6.352 11.176L3.707 9.855C2.66 9.332 2 8.262 2 7.09C2 5.383 3.383 4 5.09 4L6 4","key":"4"})
  );
});

TrophyPointed.displayName = 'TrophyPointed';

export default TrophyPointed;
export { TrophyPointed };
