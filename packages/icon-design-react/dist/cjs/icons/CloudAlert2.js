'use strict';

const { createElement, forwardRef } = require('react');

const CloudAlert2 = forwardRef(function CloudAlert2(
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
    createElement('line', {"x1":"11.999999999998181","y1":"9.999999999718057","x2":"11.999999999998181","y2":"11.999999999718057","key":"0"}),
    createElement('line', {"x1":"11.999999999998181","y1":"14.989999999717838","x2":"11.999999999998181","y2":"14.999999999718057","key":"1"}),
    createElement('path', {"d":"M17.999999999998181,10.999999999718057h-.02520751953125c.014892578125-.164916992180224.02520751953125-.331176757810681.02520751953125-.5,0-3.037536621090112-2.46246337890625-5.5-5.5-5.5-2.13836669921875,0-3.98736572265625,1.222900390631366-4.89727783203125,3.005187988270336-.0345458984375-.000610351560681-.06805419921875-.005187988270336-.10272216796875-.005187988270336-3.03753662109375,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.46246337890625,5.5,5.5,5.5h10.5c2.20916748046875,0,4-1.790832519540345,4-4,0-2.209167480479664-1.79083251953125-4-4-4Z","key":"2"})
  );
});

CloudAlert2.displayName = 'CloudAlert2';

module.exports = CloudAlert2;
module.exports.CloudAlert2 = CloudAlert2;
module.exports.default = CloudAlert2;
