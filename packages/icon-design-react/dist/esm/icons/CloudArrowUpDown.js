import { createElement, forwardRef } from 'react';

const CloudArrowUpDown = forwardRef(function CloudArrowUpDown(
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
    createElement('path', {"d":"M17,15.999999999998181h1c2.209167480470569,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519529431-4-4-4h-.025207519529431c.014892578119543-.164916992180224.025207519529431-.331176757809772.025207519529431-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699220569,0-3.987365722659888,1.222900390630457-4.897277832029431,3.005187988270336-.034545898441138-.000610351560681-.068054199220569-.005187988270336-.102722167970569-.005187988270336-3.037536621101026,0-5.5,2.462463378909888-5.5,5.5,0,2.868713378909888,2.197143554680224,5.221862792959655,5,5.474792480459655","key":"0"}),
    createElement('polyline', {"points":"9.000000026699126 19.000000026499038 12.000000005060429 22.000000026499038 15.000000026699126 19.000000026499038","key":"1"}),
    createElement('line', {"x1":"12.000000012270903","y1":"10.000000026499038","x2":"12.000000012270903","y2":"22.000000026499038","key":"2"}),
    createElement('polyline', {"points":"9 13.000000026499038 11.999999978359483 10.000000026499038 15 13.000000026499038","key":"3"})
  );
});

CloudArrowUpDown.displayName = 'CloudArrowUpDown';

export default CloudArrowUpDown;
export { CloudArrowUpDown };
