import { createElement, forwardRef } from 'react';

const ApplicationWindow2Cloud3 = forwardRef(function ApplicationWindow2Cloud3(
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
    createElement('path', {"d":"M6.00000000018008,22.000000000448381l-2,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v8","key":"0"}),
    createElement('path', {"d":"M19.00000000018008,16.000000000448381h-.050415039060681c-.244506835939319-1.69403076171875-1.687866210939319-3-3.449584960939319-3-1.932983398430224,0-3.5,1.567016601563409-3.5,3.5v.5h-.5c-1.380737304680224,0-2.5,1.119262695313409-2.5,2.5,0,1.380737304688409,1.119262695319776,2.5,2.5,2.5h7.5c1.656860351569776,0,3-1.343139648436591,3-3,0-1.656860351561591-1.343139648430224-3-3-3Z","key":"1"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"2"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"4"})
  );
});

ApplicationWindow2Cloud3.displayName = 'ApplicationWindow2Cloud3';

export default ApplicationWindow2Cloud3;
export { ApplicationWindow2Cloud3 };
