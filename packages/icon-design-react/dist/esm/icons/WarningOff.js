import { createElement, forwardRef } from 'react';

const WarningOff = forwardRef(function WarningOff(
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
    createElement('line', {"x1":"12.000000004469257","y1":"17.01000000388558","x2":"12.000000004469257","y2":"17.000000003885361","key":"0"}),
    createElement('line', {"x1":"12.000000004469257","y1":"9.000000003885361","x2":"12.000000004469257","y2":"12.000000003885361","key":"1"}),
    createElement('line', {"x1":"2.000000004469257","y1":"22.000000003885361","x2":"22.000000004469257","y2":"2.000000003886271","key":"2"}),
    createElement('path', {"d":"M15.903259281809369,8.096740726541611l-2.150817871090112-3.910522460935681c-.759887695319776-1.381530761719659-2.744995117200233-1.381530761719659-3.5048828125,0l-7.617431640628638,13.849914550779431c-.53839111328125.97894287109375-.156677246101026,2.11328125.684204101558862,2.649536132817047","key":"3"}),
    createElement('path', {"d":"M8.166320805239593,21.000000003885361h11.451110839851026c1.521240234378638,0,2.48553466796875-1.63092041015625,1.75244140625-2.9638671875l-3.633422851571595-6.60626220703125","key":"4"})
  );
});

WarningOff.displayName = 'WarningOff';

export default WarningOff;
export { WarningOff };
