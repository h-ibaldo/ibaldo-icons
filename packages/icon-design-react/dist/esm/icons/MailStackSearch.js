import { createElement, forwardRef } from 'react';

const MailStackSearch = forwardRef(function MailStackSearch(
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
    createElement('circle', {"cx":"17.999999976489562","cy":"15.998779299956368","r":"4","key":"0"}),
    createElement('line', {"x1":"15.171569800710131","y1":"18.827209475737618","x2":"11.999999976489562","y2":"21.998779299956368","key":"1"}),
    createElement('path', {"d":"M10.999999976489562,12.998779299956368h-4c-.552284749830505,0-1-.447715250171314-1-1V2.998779299956368c0-.552284749828686.447715250169495-1,1-1h14c.552284749830505,0,1,.447715250171314,1,1v7","key":"2"}),
    createElement('path', {"d":"M1.999999976489562,4.998779299956368v11c0,.552284749828686.447715250169495,1,1,1h7","key":"3"}),
    createElement('path', {"d":"M6.38482663664945,2.229736331206368l6.950809501011463,6.178497334232816c.37888602197927.336787575088238.949841655688942.336787575088238,1.328727677659117,0l6.950809501009644-6.178497334232816","key":"4"})
  );
});

MailStackSearch.displayName = 'MailStackSearch';

export default MailStackSearch;
export { MailStackSearch };
