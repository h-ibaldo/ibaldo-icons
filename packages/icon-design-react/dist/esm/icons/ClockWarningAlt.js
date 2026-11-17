import { createElement, forwardRef } from 'react';

const ClockWarningAlt = forwardRef(function ClockWarningAlt(
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
    createElement('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"0"}),
    createElement('path', {"d":"M3.804247641510301,21.999999999887223h6.391504716979398c.785435540659819,0,1.264278308000939-.86395093361898.847998304010616-1.529998939999132l-3.195752358489699-5.113203773589703c-.39166755000042-.626668079999945-1.304329058020812-.626668079999945-1.695996608021233,0l-3.195752358489699,5.113203773589703c-.416280003990323.666048006380151.062562763350797,1.529998939999132.847998304010616,1.529998939999132Z","key":"1"}),
    createElement('path', {"d":"M15,21.540771484258585c4.056884765630457-1.2744140625,7-5.063354492180224,7-9.540771484371362,0-5.522827148439319-4.477111816409888-10-10-10C6.477172851560681,1.999999999887223,2,6.477172851447904,2,11.999999999887223c0,.685913085941138.075988769529431,1.35302734375.207885742189319,2","key":"2"})
  );
});

ClockWarningAlt.displayName = 'ClockWarningAlt';

export default ClockWarningAlt;
export { ClockWarningAlt };
