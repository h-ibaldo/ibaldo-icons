import { createElement, forwardRef } from 'react';

const LogoutWide = forwardRef(function LogoutWide(
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
    createElement('polyline', {"points":"16.974731450040053 7.000000000481123 21.974731450043691 12.000000000481123 16.974731450040053 17.000000000481123","key":"0"}),
    createElement('line', {"x1":"8.974731450040053","y1":"12.000000000481123","x2":"21.974731450043691","y2":"12.000000000481123","key":"1"}),
    createElement('path', {"d":"M12.974731450043691,22.000000000481123H4.974731450043691c-1.656854249493335,0-3-1.343145750508484-3-3V5.000000000481123c0-1.656854249493335,1.343145750506665-3,3-3h8","key":"2"})
  );
});

LogoutWide.displayName = 'LogoutWide';

export default LogoutWide;
export { LogoutWide };
