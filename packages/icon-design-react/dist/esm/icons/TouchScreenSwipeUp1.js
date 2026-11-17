import { createElement, forwardRef } from 'react';

const TouchScreenSwipeUp1 = forwardRef(function TouchScreenSwipeUp1(
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
    createElement('polyline', {"points":"20.974731437145238 6.998779299483431 17.974731436876027 3.998779299752641 14.974731437145238 6.998779300021852","key":"0"}),
    createElement('line', {"x1":"17.974731437596347","y1":"11.998779299752641","x2":"17.974731436876027","y2":"3.998779299752641","key":"1"}),
    createElement('circle', {"cx":"17.974731437956052","cy":"15.998779299752641","r":"3.999999999999773","key":"2"}),
    createElement('polyline', {"points":"8.974731437145238 6.99877929894501 5.974731436876027 3.99877929921422 2.974731437145238 6.998779299483431","key":"3"}),
    createElement('line', {"x1":"5.974731437596347","y1":"11.99877929921422","x2":"5.974731436876027","y2":"3.99877929921422","key":"4"}),
    createElement('circle', {"cx":"5.974731437956052","cy":"15.99877929921422","r":"3.999999999999773","key":"5"})
  );
});

TouchScreenSwipeUp1.displayName = 'TouchScreenSwipeUp1';

export default TouchScreenSwipeUp1;
export { TouchScreenSwipeUp1 };
