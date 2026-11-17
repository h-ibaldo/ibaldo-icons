'use strict';

const { createElement, forwardRef } = require('react');

const Fingerprint7 = forwardRef(function Fingerprint7(
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
    createElement('path', {"d":"M12,12c0,2.209138999198331,1.79086100079985,4,4,4s4-1.790861000801669,4-4","key":"0"}),
    createElement('path', {"d":"M8.00000000036016,11.99999999927968c-.000000000389264,4.418277998400299,3.581722000890295,8.000000000320142,7.99999999927968,8.00000000072032","key":"1"}),
    createElement('path', {"d":"M4,12c0,4.17620849609375,2.135681152349207,7.85064697265625,5.371948242189319,10","key":"2"}),
    createElement('path', {"d":"M2,19.73992919921875c.4423828125.798522949219659.953247070310681,1.552734375,1.520874023439319,2.26007080078125","key":"3"}),
    createElement('path', {"d":"M12,11.99999999927968c0-2.209138999198331-1.79086100079985-3.999999999996362-4-3.999999999996362-2.209138999189236,0-4,1.790861000798031-4,3.999999999996362","key":"4"}),
    createElement('path', {"d":"M15.99999999963984,12c.000000000400178-4.418277998400299-3.581722000879381-8.000000000320142-7.99999999927968-8.00000000072032","key":"5"}),
    createElement('path', {"d":"M20,11.99999999927968c0-4.176208496090112-2.135681152340112-7.850646972652612-5.371948242189319-10","key":"6"}),
    createElement('path', {"d":"M22,4.260070800064568c-.4423828125-.79852294921875-.953247070310681-1.552734375-1.520874023439319-2.260070800784888","key":"7"}),
    createElement('path', {"d":"M8,4c-2.392639160150793,0-4.533996582029431,1.055908203125-6,2.720703125","key":"8"}),
    createElement('path', {"d":"M16,20c2.392639160159888,0,4.533996582029431-1.055908203125,6-2.720703125","key":"9"})
  );
});

Fingerprint7.displayName = 'Fingerprint7';

module.exports = Fingerprint7;
module.exports.Fingerprint7 = Fingerprint7;
module.exports.default = Fingerprint7;
