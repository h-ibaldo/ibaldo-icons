import { createElement, forwardRef } from 'react';

const BurstLV = forwardRef(function BurstLV(
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
    createElement('polyline', {"points":"22.000000000090949 9.000000000896762 21.99999999919055 21.000000000896762 7.99999999919055 20.99999999981992","key":"0"}),
    createElement('polyline', {"points":"19 6.000000000001819 18.9999999990996 17.999999999998181 4.9999999990996 17.999999998921339","key":"1"}),
    createElement('polyline', {"points":"2.000000003439709 12.999999999998181 2.000000002399247 14.999999998321073 16.000000002659363 14.999999999612555 16 2.999999999998181","key":"2"}),
    createElement('polyline', {"points":"1.999999999869033 3.000000000067303 2.000000000140062 9.000000000067303 5.000000000130967 8.999999999932697","key":"3"}),
    createElement('polyline', {"points":"7 2.999999999998181 9.000000003050445 8.999999999790816 11 2.999999999998181","key":"4"})
  );
});

BurstLV.displayName = 'BurstLV';

export default BurstLV;
export { BurstLV };
