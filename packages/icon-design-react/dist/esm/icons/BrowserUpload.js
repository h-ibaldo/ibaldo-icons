import { createElement, forwardRef } from 'react';

const BrowserUpload = forwardRef(function BrowserUpload(
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
    createElement('path', {"d":"M6.025268534602219,21.998779296922294h-2c-1.104569499659192,0-2-.895430500338989-2-2V3.998779296922294c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500338989,2-2,2h-2","key":"0"}),
    createElement('line', {"x1":"2.025268534602219","y1":"7.998779296922294","x2":"22.025268534602219","y2":"7.998779296922294","key":"1"}),
    createElement('line', {"x1":"5.035268534602437","y1":"4.998779296922294","x2":"5.025268534602219","y2":"4.998779296922294","key":"2"}),
    createElement('line', {"x1":"8.035268534602437","y1":"4.998779296922294","x2":"8.025268534602219","y2":"4.998779296922294","key":"3"}),
    createElement('line', {"x1":"19.025268540959587","y1":"4.998779296922294","x2":"11.025268534602219","y2":"4.998779296922294","key":"4"}),
    createElement('polyline', {"points":"9.025268534602219 15.998779296922294 12.025268534602219 12.998779296922294 15.025268534602219 15.998779296922294","key":"5"}),
    createElement('line', {"x1":"12.025268534602219","y1":"12.998779296922294","x2":"12.025268534602219","y2":"21.998779296922294","key":"6"})
  );
});

BrowserUpload.displayName = 'BrowserUpload';

export default BrowserUpload;
export { BrowserUpload };
