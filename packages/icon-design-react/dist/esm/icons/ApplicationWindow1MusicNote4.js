import { createElement, forwardRef } from 'react';

const ApplicationWindow1MusicNote4 = forwardRef(function ApplicationWindow1MusicNote4(
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
    createElement('polyline', {"points":"22.000000000182808 13.0000000004502 15.000000000184627 14.000000000448381 15.000000000184627 21.000000000448381","key":"0"}),
    createElement('ellipse', {"cx":"13.500000000184627","cy":"21.000000000448381","rx":"1.5","ry":"1","key":"1"}),
    createElement('line', {"x1":"22.000000000184627","y1":"13.000000000448381","x2":"22.000000000184627","y2":"20.000000000448381","key":"2"}),
    createElement('ellipse', {"cx":"20.500000000184627","cy":"20.000000000448381","rx":"1.5","ry":"1","key":"3"}),
    createElement('path', {"d":"M8.000000000184627,22.000000000448381h-4c-1.104569499661011,0-2-.89543050033717-2-2V4.000000000448381c0-1.10456949966192.895430500338989-2,2-2h16c1.104569499661011,0,2,.89543050033808,2,2v5","key":"4"}),
    createElement('line', {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"5"}),
    createElement('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"6"}),
    createElement('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"7"}),
    createElement('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"8"})
  );
});

ApplicationWindow1MusicNote4.displayName = 'ApplicationWindow1MusicNote4';

export default ApplicationWindow1MusicNote4;
export { ApplicationWindow1MusicNote4 };
