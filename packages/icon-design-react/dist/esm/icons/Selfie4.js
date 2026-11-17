import { createElement, forwardRef } from 'react';

const Selfie4 = forwardRef(function Selfie4(
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
    createElement('rect', {"x":"2.000538506249995","y":"4.999505874995066","width":"20","height":"14.000981371279522","rx":"2.160322612580833","ry":"2.160322612580833","transform":"translate(.000541944988678 24.000535066258358) rotate(-89.999999997008871)","key":"0"}),
    createElement('polyline', {"points":"13.000538512780622 21.99999656430191 13.000538512869753 19.99999656430191 11.000538512869753 19.99999656421096 11.000538512780622 21.99999656421096","key":"1"}),
    createElement('circle', {"cx":"12.001029198860124","cy":"8.499996564258254","r":"2.5","key":"2"}),
    createElement('path', {"d":"M15.001029198860124,15.999996564258254v-2.000003000001016c0-1.656852592637733-1.343144407359432-2.999996999998984-2.999997000000803-2.999996999998984h-.000005999998393c-1.656852592630457,0-2.999997000000803,1.343144407361251-2.999997000000803,2.999996999998984v2.000003000001016","key":"3"})
  );
});

Selfie4.displayName = 'Selfie4';

export default Selfie4;
export { Selfie4 };
