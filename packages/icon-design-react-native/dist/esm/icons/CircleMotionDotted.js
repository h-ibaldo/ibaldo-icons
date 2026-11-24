import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const CircleMotionDotted = forwardRef(function CircleMotionDotted(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Circle, {"cx":"16.999999981000656","cy":"11.999996563432433","r":"5","key":"0"}),
    createElement(Path, {"d":"M9.999999981000656,7.430660625932433c-1.762451171871362.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828128638,3.79644775390625,3,4.5693359375","key":"1"}),
    createElement(Line, {"x1":"5.009999981000874","y1":"7.430660625932433","x2":"4.999999981000656","y2":"7.430660625932433","key":"2"}),
    createElement(Line, {"x1":"5.009999981000874","y1":"16.569332500932433","x2":"4.999999981000656","y2":"16.569332500932433","key":"3"}),
    createElement(Line, {"x1":"2.009999981000874","y1":"11.999996563432433","x2":"1.999999981000656","y2":"11.999996563432433","key":"4"}),
    createElement(Line, {"x1":"2.830660490519222","y1":"9.267991786638959","x2":"2.820660490520822","y2":"9.267991786638959","key":"5"}),
    createElement(Line, {"x1":"2.830660490519222","y1":"14.732001340225906","x2":"2.820660490520822","y2":"14.732001340225906","key":"6"})
  );
});

CircleMotionDotted.displayName = 'CircleMotionDotted';

export default CircleMotionDotted;
export { CircleMotionDotted };
