import { createElement, forwardRef } from 'react';

const VRDeviceDimensions = forwardRef(function VRDeviceDimensions(
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
    createElement('path', {"d":"M17.999999999210559,10.999999999643478V3.999999999643478c0-1.1046142578125-.8955078125-2-2-2H7.999999999210559c-1.1044921875,0-2,.8953857421875-2,2v7","key":"0"}),
    createElement('path', {"d":"M5.999999999210559,14.799987792612228v5.20001220703125c0,1.10455322265625.8955078125,2,2,2h8c1.1044921875,0,2-.89544677734375,2-2v-5.20001220703125","key":"1"}),
    createElement('polyline', {"points":"5.999999999210559 9.200012206674728 1.999999999210559 11.999999999643478 11.999999999210559 18.999999999643478 21.999999999210559 11.999999999643478 17.999999999210559 9.200012206674728","key":"2"}),
    createElement('polyline', {"points":"14.999999999210559 7.099975585580978 11.999999999210559 4.999999999643478 8.999999999210559 7.099975585580978","key":"3"})
  );
});

VRDeviceDimensions.displayName = 'VRDeviceDimensions';

export default VRDeviceDimensions;
export { VRDeviceDimensions };
