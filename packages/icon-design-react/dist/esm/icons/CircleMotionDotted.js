import { createElement, forwardRef } from 'react';

const CircleMotionDotted = forwardRef(function CircleMotionDotted(
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
    createElement('circle', {"cx":"16.999999981000656","cy":"11.999996563432433","r":"5","key":"0"}),
    createElement('path', {"d":"M9.999999981000656,7.430660625932433c-1.762451171871362.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828128638,3.79644775390625,3,4.5693359375","key":"1"}),
    createElement('line', {"x1":"5.009999981000874","y1":"7.430660625932433","x2":"4.999999981000656","y2":"7.430660625932433","key":"2"}),
    createElement('line', {"x1":"5.009999981000874","y1":"16.569332500932433","x2":"4.999999981000656","y2":"16.569332500932433","key":"3"}),
    createElement('line', {"x1":"2.009999981000874","y1":"11.999996563432433","x2":"1.999999981000656","y2":"11.999996563432433","key":"4"}),
    createElement('line', {"x1":"2.830660490519222","y1":"9.267991786638959","x2":"2.820660490520822","y2":"9.267991786638959","key":"5"}),
    createElement('line', {"x1":"2.830660490519222","y1":"14.732001340225906","x2":"2.820660490520822","y2":"14.732001340225906","key":"6"})
  );
});

CircleMotionDotted.displayName = 'CircleMotionDotted';

export default CircleMotionDotted;
export { CircleMotionDotted };
