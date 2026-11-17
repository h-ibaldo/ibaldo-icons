import { createElement, forwardRef } from 'react';

const Vpn1 = forwardRef(function Vpn1(
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
    createElement('polyline', {"points":"2.016630450972116 8.000000000480213 4.516630450972116 16.000000000480213 7.016630450972116 8.000000000480213","key":"0"}),
    createElement('line', {"x1":"10.516630450972116","y1":"8.000000000476575","x2":"10.516630450972116","y2":"16.000000000480213","key":"1"}),
    createElement('path', {"d":"M10.516630450972116,8.000000000476575h2c1.104569499661011,0,2,.895430500338989,2,2v1c0,1.104569499661011-.895430500338989,2-2,2h-2","key":"2"}),
    createElement('polyline', {"points":"22.016630450972116 8.000000000480213 22.016630450972116 16.000000000480213 18.016630450972116 8.000000000476575 18.016630450972116 16.000000000476575","key":"3"})
  );
});

Vpn1.displayName = 'Vpn1';

export default Vpn1;
export { Vpn1 };
