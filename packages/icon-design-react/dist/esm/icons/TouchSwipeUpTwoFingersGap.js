import { createElement, forwardRef } from 'react';

const TouchSwipeUpTwoFingersGap = forwardRef(function TouchSwipeUpTwoFingersGap(
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
    createElement('polyline', {"points":"20.974731438316667 4.99877930375078 17.974731438316667 1.99877930375078 14.974731438316667 4.99877930375078","key":"0"}),
    createElement('line', {"x1":"17.974731438316667","y1":"9.99877930375078","x2":"17.974731438316667","y2":"1.99877930375078","key":"1"}),
    createElement('circle', {"cx":"17.974731438316667","cy":"17.99877930375078","r":"4","key":"2"}),
    createElement('polyline', {"points":"8.974731438316667 4.998779303212359 5.974731438316667 1.998779303212359 2.974731438316667 4.998779303212359","key":"3"}),
    createElement('line', {"x1":"5.974731438316667","y1":"9.998779303212359","x2":"5.974731438316667","y2":"1.998779303212359","key":"4"}),
    createElement('circle', {"cx":"5.974731438316667","cy":"17.998779303212359","r":"4","key":"5"})
  );
});

TouchSwipeUpTwoFingersGap.displayName = 'TouchSwipeUpTwoFingersGap';

export default TouchSwipeUpTwoFingersGap;
export { TouchSwipeUpTwoFingersGap };
