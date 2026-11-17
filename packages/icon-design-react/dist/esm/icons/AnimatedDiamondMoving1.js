import { createElement, forwardRef } from 'react';

const AnimatedDiamondMoving1 = forwardRef(function AnimatedDiamondMoving1(
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
    createElement('polyline', {"points":"16.999999981000656 2.999996564421963 11.999999981000656 11.999996564421963 16.999999981000656 20.999996564421963","key":"0"}),
    createElement('polyline', {"points":"11.999999981000656 2.999996564421963 6.999999981000656 11.999996564421963 11.999999981000656 20.999996564421963","key":"1"}),
    createElement('polyline', {"points":"6.999999981000656 2.999996564421963 1.999999981000656 11.999996564421963 6.999999981000656 20.999996564421963","key":"2"}),
    createElement('polyline', {"points":"16.999999981000656 20.999996564421963 21.999999981000656 11.999996564425601 16.999999981000656 2.999996564421963","key":"3"})
  );
});

AnimatedDiamondMoving1.displayName = 'AnimatedDiamondMoving1';

export default AnimatedDiamondMoving1;
export { AnimatedDiamondMoving1 };
