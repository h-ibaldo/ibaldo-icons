import { createElement, forwardRef } from 'react';

const Music = forwardRef(function Music(
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
    createElement('ellipse', {"cx":"5.5","cy":"18.999999999998181","rx":"3.5","ry":"3","key":"0"}),
    createElement('ellipse', {"cx":"18.5","cy":"16.999999999998181","rx":"3.5","ry":"3","key":"1"}),
    createElement('polyline', {"points":"9 18.999999999998181 9 3.999999999998181 22 1.999999999998181 22 16.999999999998181","key":"2"})
  );
});

Music.displayName = 'Music';

export default Music;
export { Music };
