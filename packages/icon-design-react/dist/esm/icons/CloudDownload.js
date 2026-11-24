import { createElement, forwardRef } from 'react';

const CloudDownload = forwardRef(function CloudDownload(
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
    createElement('polyline', {"points":"10 12.999999999998181 11.999999987390765 14.999999999998181 14 12.999999999998181","key":"0"}),
    createElement('line', {"x1":"11.999999987390765","y1":"9.999999999998181","x2":"11.999999987390765","y2":"14.999999999998181","key":"1"}),
    createElement('path', {"d":"M18,10.999999999998181h-.025207519540345c.014892578130457-.164916992180224.025207519540345-.331176757809772.025207519540345-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699220569,0-3.987365722659888,1.222900390630457-4.897277832040345,3.005187988270336-.034545898430224-.000610351560681-.068054199209655-.005187988270336-.102722167959655-.005187988270336-3.037536621101026,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.462463378898974,5.5,5.5,5.5h10.5c2.209167480459655,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519540345-4-4-4Z","key":"2"})
  );
});

CloudDownload.displayName = 'CloudDownload';

export default CloudDownload;
export { CloudDownload };
