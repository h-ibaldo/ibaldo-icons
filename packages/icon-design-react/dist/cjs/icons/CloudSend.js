'use strict';

const { createElement, forwardRef } = require('react');

const CloudSend = forwardRef(function CloudSend(
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
    createElement('line', {"x1":"17.999999999994543","y1":"8.999999999727152","x2":"16.999999999994543","y2":"7.999999999727152","key":"0"}),
    createElement('polygon', {"points":"14.999999999994543 12.999999999718057 10.999999999994543 1.999999999727152 21.999999999996362 5.999999999718057 17.999999999994543 8.999999999718057 14.999999999994543 12.999999999718057","key":"1"}),
    createElement('path', {"d":"M9.999999999996362,8.615112304407376c-1.02679443359375.528381347659888-1.87176513671875,1.360778808581017-2.39727783203125,2.390075683581017-.0345458984375-.000610351560681-.06805419921875-.005187988270336-.10272216796875-.005187988270336-3.03753662109375,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.46246337890625,5.5,5.5,5.5h10.5c2.20916748046875,0,4-1.790832519540345,4-4,0-2.209167480479664-1.79083251953125-4-4-4h-.02520751953125","key":"2"})
  );
});

CloudSend.displayName = 'CloudSend';

module.exports = CloudSend;
module.exports.CloudSend = CloudSend;
module.exports.default = CloudSend;
