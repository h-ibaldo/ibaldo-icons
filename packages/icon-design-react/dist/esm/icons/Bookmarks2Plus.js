import { createElement, forwardRef } from 'react';

const Bookmarks2Plus = forwardRef(function Bookmarks2Plus(
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
    createElement('path', {"d":"M15.000000026699126,5.999999999998181H5.000000026699126c-.552284749828686,0-1,.447715250169495-1,1v15l6-3,6,3V6.999999999998181c0-.552284749830505-.447715250169495-1-1-1Z","key":"0"}),
    createElement('path', {"d":"M20.000000026699126,17.999999999998181V4.999999999998181c0-1.656854249490607-1.343145750508484-3-3-3h-9","key":"1"}),
    createElement('line', {"x1":"7.509665274770668","y1":"12.499999999998181","x2":"12.509665274770668","y2":"12.499999999998181","key":"2"}),
    createElement('line', {"x1":"10.009665274770668","y1":"9.999999999998181","x2":"10.009665274770668","y2":"14.999999999998181","key":"3"})
  );
});

Bookmarks2Plus.displayName = 'Bookmarks2Plus';

export default Bookmarks2Plus;
export { Bookmarks2Plus };
