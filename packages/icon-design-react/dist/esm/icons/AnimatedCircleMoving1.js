import { createElement, forwardRef } from 'react';

const AnimatedCircleMoving1 = forwardRef(function AnimatedCircleMoving1(
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
    createElement('circle', {"cx":"16.999999980989742","cy":"11.997562035418014","r":"5","key":"0"}),
    createElement('path', {"d":"M9.999999980989742,7.428226097918014c-1.762451171869543.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828130457,3.79644775390625,3,4.5693359375","key":"1"}),
    createElement('path', {"d":"M4.999999980989742,7.428226097918014c-1.762451171869543.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828130457,3.79644775390625,3,4.5693359375","key":"2"})
  );
});

AnimatedCircleMoving1.displayName = 'AnimatedCircleMoving1';

export default AnimatedCircleMoving1;
export { AnimatedCircleMoving1 };
