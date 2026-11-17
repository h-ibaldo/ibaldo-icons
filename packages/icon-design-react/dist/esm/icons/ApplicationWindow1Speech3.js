import { createElement, forwardRef } from 'react';

const ApplicationWindow1Speech3 = forwardRef(function ApplicationWindow1Speech3(
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
    createElement('path', {"d":"M9.890557941264888,15.499996500448106v.000006999999641c0,1.932994691412205,1.56700180858752,3.499996500000634,3.499996499999725,3.499996500000634h.500003500000275v3l4-3h.500003499999366c1.932994691412205,0,3.499996500000634-1.567001808588429,3.499996500000634-3.499996500000634v-.000006999999641c0-1.932994691410386-1.567001808588429-3.499996499999725-3.499996500000634-3.499996499999725h-5.000006999999641c-1.932994691410386,0-3.499996499999725,1.567001808589339-3.499996499999725,3.499996499999725Z","key":"0"}),
    createElement('path', {"d":"M22.000000000184627,9.000000000448381v-5c0-1.10456949966192-.895430500338989-2-2-2H4.000000000184627c-1.104569499661011,0-2,.89543050033808-2,2v16c0,1.10456949966283.895430500338989,2,2,2h5","key":"1"}),
    createElement('line', {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"2"}),
    createElement('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"5"})
  );
});

ApplicationWindow1Speech3.displayName = 'ApplicationWindow1Speech3';

export default ApplicationWindow1Speech3;
export { ApplicationWindow1Speech3 };
