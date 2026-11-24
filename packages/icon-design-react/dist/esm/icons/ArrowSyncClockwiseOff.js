import { createElement, forwardRef } from 'react';

const ArrowSyncClockwiseOff = forwardRef(function ArrowSyncClockwiseOff(
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
    createElement('polyline', {"points":"22.000000000411092 11.000000000489308 20.000000000229193 13.000000000309228 18.000000000411092 11.000000000129148","key":"0"}),
    createElement('line', {"x1":"19","y1":"2","x2":"5","y2":"22","key":"1"}),
    createElement('g', {"key":"2"},
      createElement('path', {"d":"M20,12c0-2.711181640621362-1.35205078125-5.10302734375-3.4150390625-6.549926757810681","key":"0"}),
      createElement('path', {"d":"M12.865966796875,4.048583984378638c-.28466796875-.030517578128638-.573120117188409-.048583984378638-.865966796875-.048583984378638-2.62811279296875,0-4.96026611328125,1.267333984378638-6.418701171875,3.22412109375","key":"1"})),
    createElement('polyline', {"points":"2 12.999999999508873 4.000000000181899 10.999999999688953 6 12.999999999869033","key":"3"}),
    createElement('g', {"key":"4"},
      createElement('path', {"d":"M4.000000000411092,12c0,2.711181640628638,1.35205078125,5.10302734375,3.4150390625,6.549926757808862","key":"0"}),
      createElement('path', {"d":"M11.134033203536092,19.951416015628638c.28466796875.030517578121362.5731201171875.048583984371362.865966796875.048583984371362,2.628112792970569,0,4.96026611328125-1.267333984371362,6.418701171875-3.22412109375","key":"1"}))
  );
});

ArrowSyncClockwiseOff.displayName = 'ArrowSyncClockwiseOff';

export default ArrowSyncClockwiseOff;
export { ArrowSyncClockwiseOff };
