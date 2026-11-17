import { createElement, forwardRef } from 'react';

const TranslateSync = forwardRef(function TranslateSync(
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
    createElement('path', {"d":"M20.025268548975873,13.997565476121054c-2,1-5,3-5,5s3,3,6,2","key":"0"}),
    createElement('path', {"d":"M18.025268548975873,11.997565476121054c-1.236875890319425-.590576526228688-2,.375003337849193-2,1,0,1,1,2,2,2","key":"1"}),
    createElement('polyline', {"points":"2.025268548975873 10.997565476121054 6.025268548975873 1.997565476121054 10.025268548975873 10.997565476121054","key":"2"}),
    createElement('line', {"x1":"3.025268548975873","y1":"8.997565476121054","x2":"9.025268548975873","y2":"8.997565476121054","key":"3"}),
    createElement('g', {"key":"4"},
      createElement('path', {"d":"M19.025268548975873,7.997565476121054v-2c0-1.104569499661011-.895430500340808-2-2-2h-4","key":"0"}),
      createElement('polyline', {"points":"15.025268548975873 1.997565476121054 13.025268548975873 3.997565476121054 15.025268548975873 5.997565476121054","key":"1"})),
    createElement('g', {"key":"5"},
      createElement('path', {"d":"M5.025268549246903,15.997565475851843l-.000000000181899,2c-.000000000098225,1.104569499661011.895430500160728,2.000000000080036,1.999999999821739,2.000000000178261l4,.00000000036016","key":"0"}),
      createElement('polyline', {"points":"9.025268548706663 21.997565476212003 11.025268548886743 19.997565476390264 9.025268549065004 17.997565476212003","key":"1"}))
  );
});

TranslateSync.displayName = 'TranslateSync';

export default TranslateSync;
export { TranslateSync };
