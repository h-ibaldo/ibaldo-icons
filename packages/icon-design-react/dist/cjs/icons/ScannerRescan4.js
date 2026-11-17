'use strict';

const { createElement, forwardRef } = require('react');

const ScannerRescan4 = forwardRef(function ScannerRescan4(
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
    createElement('polyline', {"points":"1.999999981189831 1.999996564258254 1.999999981189831 4.999996564254616 4.999999981189831 4.999996564254616","key":"0"}),
    createElement('path', {"d":"M3.385253887439831,8.999996564258254c.699035644529431.61737060546875,1.607360839840112,1,2.61474609375,1,2.209167480459655,0,4-1.7908935546875,4-4,0-2.20916748046875-1.790832519540345-4-4-4-1.861694335939319,0-3.412475585939319,1.27777099609375-3.858581542970569,3","key":"1"}),
    createElement('path', {"d":"M1.999999981189831,16.999996564258254h20v3c0,1.103830048988002-.896169951011998,2-2,2H3.999999981189831c-1.103830048988,0-2-.896169951011998-2-2v-3h0Z","key":"2"}),
    createElement('line', {"x1":"17.999999981189831","y1":"18.999996564258254","x2":"17.999999981189831","y2":"16.999996564258254","key":"3"}),
    createElement('line', {"x1":"14.999999981189831","y1":"10.999996564258254","x2":"14.999999981189831","y2":"16.999996564258254","key":"4"}),
    createElement('polyline', {"points":"21.999999981189831 16.999996564258254 21.999999981189831 10.999996564258254 12.666686992899486 10.999996564258254","key":"5"}),
    createElement('polyline', {"points":"1.999999981189831 11.999996564258254 1.999999981189831 16.999996564258254 17.999999981189831 7.999996564258254 17.999999981189831 1.999996564258254 12.999999981189831 4.812496564258254","key":"6"})
  );
});

ScannerRescan4.displayName = 'ScannerRescan4';

module.exports = ScannerRescan4;
module.exports.ScannerRescan4 = ScannerRescan4;
module.exports.default = ScannerRescan4;
