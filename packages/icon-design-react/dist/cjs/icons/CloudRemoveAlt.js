'use strict';

const { createElement, forwardRef } = require('react');

const CloudRemoveAlt = forwardRef(function CloudRemoveAlt(
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
    createElement('path', {"d":"M18,10.999999999998181h-.025207519530341c.014892578120453-.164916992180224.025207519530341-.331176757809772.025207519530341-.5,0-3.037536621090112-2.462463378909888-5.5-5.5-5.5-2.138366699219659,0-3.987365722659888,1.222900390630457-4.897277832030341,3.005187988270336-.034545898439319-.000610351560681-.068054199219659-.005187988270336-.102722167969659-.005187988270336-3.037536621100116,0-5.5,2.462463378909888-5.5,5.5,0,3.037536621099207,2.462463378899884,5.5,5.5,5.5h10.5c2.209167480469659,0,4-1.790832519540345,4-4,0-2.209167480479664-1.790832519530341-4-4-4Z","key":"0"}),
    createElement('line', {"x1":"9","y1":"12.999999999998181","x2":"15","y2":"12.999999999998181","key":"1"})
  );
});

CloudRemoveAlt.displayName = 'CloudRemoveAlt';

module.exports = CloudRemoveAlt;
module.exports.CloudRemoveAlt = CloudRemoveAlt;
module.exports.default = CloudRemoveAlt;
