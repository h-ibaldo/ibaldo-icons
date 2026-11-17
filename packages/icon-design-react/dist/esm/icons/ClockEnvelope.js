import { createElement, forwardRef } from 'react';

const ClockEnvelope = forwardRef(function ClockEnvelope(
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
    createElement('polyline', {"points":"15 5.999999999887223 15 8.999999999887223 18 8.999999999887223","key":"0"}),
    createElement('rect', {"x":"2","y":"12.999999999887223","width":"12","height":"8.698292868270073","rx":"1","ry":"1","key":"1"}),
    createElement('path', {"d":"M2.325256347659888,13.271057128797111l4.983572877110419,4.766210860851061c.386606835400016.369744707919381.995734715059371.369744707919381,1.382341550470301,0l4.983572877099505-4.766210860851061","key":"2"}),
    createElement('path', {"d":"M18,15.317382812387223c2.36279296875-1.124267578128638,4-3.526611328128638,4-6.3173828125,0-3.865966796878638-3.133972167970569-7-7-7-3.865966796869543,0-7,3.134033203121362-7,7","key":"3"})
  );
});

ClockEnvelope.displayName = 'ClockEnvelope';

export default ClockEnvelope;
export { ClockEnvelope };
