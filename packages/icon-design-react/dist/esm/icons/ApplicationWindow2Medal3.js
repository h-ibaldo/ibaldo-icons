import { createElement, forwardRef } from 'react';

const ApplicationWindow2Medal3 = forwardRef(function ApplicationWindow2Medal3(
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
    createElement('polyline', {"points":"16.579804040500676 18.968028347201653 19.611739251789913 22.000000000448381 20.208804438889274 20.208804439144842 22.00000000018008 19.611739252043662 19.292762714751007 16.904538408578446","key":"0"}),
    createElement('circle', {"cx":"16.029348129177833","cy":"15.432282942336997","r":"3.582391122611511","key":"1"}),
    createElement('polyline', {"points":"12.765933543589199 16.904538408578446 10.058696258160126 19.611739252043662 11.84989181947094 20.208804439144842 12.446957006559387 22.000000000448381 15.478892217850444 18.968028347201653","key":"2"}),
    createElement('path', {"d":"M7.00000000018008,22.000000000448381l-3,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v7","key":"3"}),
    createElement('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381","key":"5"}),
    createElement('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381","key":"6"})
  );
});

ApplicationWindow2Medal3.displayName = 'ApplicationWindow2Medal3';

export default ApplicationWindow2Medal3;
export { ApplicationWindow2Medal3 };
