import { createElement, forwardRef } from 'react';

const CloudTransferRound = forwardRef(function CloudTransferRound(
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
    createElement('polyline', {"points":"7.999999987401679 19.999999973497324 9.999999987401679 21.999999973497324 11.999999987401679 19.999999973497324","key":"0"}),
    createElement('line', {"x1":"9.999999987401679","y1":"15.999999973497324","x2":"9.999999987401679","y2":"21.999999973497324","key":"1"}),
    createElement('polyline', {"points":"15.999999987401679 12.999999973679223 13.999999987581759 10.999999973497324 11.999999987401679 12.999999973319063","key":"2"}),
    createElement('line', {"x1":"13.999999987041519","y1":"16.999999973497324","x2":"13.999999987581759","y2":"10.999999973497324","key":"3"}),
    createElement('path', {"d":"M17.999999989220669,16.899230930528574c2.2822265625-.46337890625,4-2.480346679691138,4-4.89923095703125,0-2.44482421875-1.757080078128638-4.47235107421875-4.07568359375-4.906860351558862-.438232421878638-2.882202148441138-2.919677734378638-5.093139648441138-5.92431640625-5.093139648441138-3.004638671878638,0-5.486083984378638,2.2109375-5.92431640625,5.093139648441138-2.318603515628638.434509277340112-4.07568359375,2.462036132808862-4.07568359375,4.906860351558862,0,2.418884277340112,1.7177734375,4.43585205078125,4,4.89923095703125","key":"4"})
  );
});

CloudTransferRound.displayName = 'CloudTransferRound';

export default CloudTransferRound;
export { CloudTransferRound };
