import { createElement, forwardRef } from 'react';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const AtAlertTall = forwardRef(function AtAlertTall(
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
    createElement(Rect, {"x":"9.974727809318836","y":"7.000000000250623","width":"5.999999910374413","height":"9.999999999999659","rx":"2.999996949654355","ry":"2.999996949654355","key":"0"}),
    createElement(Line, {"x1":"17.974731450040053","y1":"22.000000000478394","x2":"12.974731450040053","y2":"22.000000000479304","key":"1"}),
    createElement(Path, {"d":"M15.974731450040053,14.000000000478394v1c0,1.10456949966192.895430500339899,2,2,2h1c1.104569499660101,0,2-.89543050033808,2-2v-1","key":"2"}),
    createElement(Line, {"x1":"2.974731450040053","y1":"2.00000000046839","x2":"2.974731450040053","y2":"6.00000000046839","key":"3"}),
    createElement(Path, {"d":"M20.974731450040053,14.00000000046839v-4c0-4.41827392578125-3.581726074220569-8-8-8","key":"4"}),
    createElement(Path, {"d":"M4.974731450040053,14.00000000046839c0,4.41827392578125,3.581726074219659,8,8,8","key":"5"}),
    createElement(Line, {"x1":"2.974731450040053","y1":"10.000000000470209","x2":"2.974731450040053","y2":"10.010000000468608","key":"6"}),
    createElement(Path, {"d":"M12.974731450040053,2.00000000046839c-2.392639160159888,0-4.533996582030341,1.055908203125-6,2.720703125","key":"7"})
  );
});

AtAlertTall.displayName = 'AtAlertTall';

export default AtAlertTall;
export { AtAlertTall };
