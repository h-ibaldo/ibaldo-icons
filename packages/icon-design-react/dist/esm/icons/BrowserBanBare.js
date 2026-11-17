import { createElement, forwardRef } from 'react';

const BrowserBanBare = forwardRef(function BrowserBanBare(
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
    createElement('path', {"d":"M9.999999993990059,21.998779299956368H3.999999993990059c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v6","key":"0"}),
    createElement('line', {"x1":"5.989999993989841","y1":"5.998779299956368","x2":"5.999999993990059","y2":"5.998779299956368","key":"1"}),
    createElement('line', {"x1":"8.989999993989841","y1":"5.998779299956368","x2":"8.999999993990059","y2":"5.998779299956368","key":"2"}),
    createElement('line', {"x1":"18.999999993990059","y1":"5.998779299956368","x2":"11.999999993990059","y2":"5.998779299956368","key":"3"}),
    createElement('circle', {"cx":"16.999999993995516","cy":"16.998779299957505","r":"5.000000000001648","key":"4"}),
    createElement('line', {"x1":"20.535533896509151","y1":"13.46324539060879","x2":"13.464466084620653","y2":"20.53431320243908","key":"5"})
  );
});

BrowserBanBare.displayName = 'BrowserBanBare';

export default BrowserBanBare;
export { BrowserBanBare };
