import { createElement, forwardRef } from 'react';

const GridCircle = forwardRef(function GridCircle(
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
    createElement('path', {"d":"M2 6C2 3.789 3.789 2 6 2C8.211 2 10 3.789 10 6C10 8.211 8.211 10 6 10C3.789 10 2 8.211 2 6Z","key":"0"}),
    createElement('path', {"d":"M2 18C2 15.789 3.789 14 6 14C8.211 14 10 15.789 10 18C10 20.211 8.211 22 6 22C3.789 22 2 20.211 2 18Z","key":"1"}),
    createElement('path', {"d":"M14 6C14 3.789 15.789 2 18 2C20.211 2 22 3.789 22 6C22 8.211 20.211 10 18 10C15.789 10 14 8.211 14 6Z","key":"2"}),
    createElement('path', {"d":"M14 18C14 15.789 15.789 14 18 14C20.211 14 22 15.789 22 18C22 20.211 20.211 22 18 22C15.789 22 14 20.211 14 18Z","key":"3"})
  );
});

GridCircle.displayName = 'GridCircle';

export default GridCircle;
export { GridCircle };
