import { createElement, forwardRef } from 'react';

const ApplicationWindow2Key6 = forwardRef(function ApplicationWindow2Key6(
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
    createElement('path', {"d":"M6.00000000018008,22.000000000448381l-2,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v4","key":"0"}),
    createElement('path', {"d":"M9.890557941269435,14.000000000448381v8l4-3h6c1.104569499650097,0,2-.895430500338989,2-2v-3c0-1.104569499661011-.895430500349903-2-2-2h-8c-1.104569499670106,0-2,.895430500338989-2,2Z","key":"1"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"2"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"4"})
  );
});

ApplicationWindow2Key6.displayName = 'ApplicationWindow2Key6';

export default ApplicationWindow2Key6;
export { ApplicationWindow2Key6 };
