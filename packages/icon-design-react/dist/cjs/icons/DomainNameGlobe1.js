'use strict';

const { createElement, forwardRef } = require('react');

const DomainNameGlobe1 = forwardRef(function DomainNameGlobe1(
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
    createElement('polyline', {"points":"22.025268549509747 21.998782739598028 22.025268549509747 16.998782739598028 20.025268549509747 18.998782739598028 18.025268549509747 16.998782739598028 18.025268549509747 21.998782739598028","key":"0"}),
    createElement('rect', {"x":"11.025268549509747","y":"16.998782739598028","width":"4","height":"5","rx":"1","ry":"1","key":"1"}),
    createElement('path', {"d":"M8.025268549509747,16.998782739598028h-2c-.552284749829596,0-1,.447715250171314-1,1v3c0,.552284749832324.447715250170404,1,1,1h2","key":"2"}),
    createElement('line', {"x1":"2.949218744819518","y1":"8.998782739598028","x2":"21.025268549509747","y2":"8.998782739598028","key":"3"}),
    createElement('line', {"x1":"2.035268549509965","y1":"21.998782739598028","x2":"2.025268549509747","y2":"21.998782739598028","key":"4"}),
    createElement('line', {"x1":"12.025268549509747","y1":"12.998782739598028","x2":"12.025268549509747","y2":"1.998782739598028","key":"5"}),
    createElement('path', {"d":"M16.999999994819518,12.998782739598028c.016357421880457-.3289794921875.025268554690228-.66241455078125.025268554690228-1,0-5.52288818359375-2.238525390619543-10-5-10-2.761474609369543,0-5,4.47711181640625-5,10,0,.33758544921875.008911132809772.6710205078125.025268554690228,1","key":"6"}),
    createElement('path', {"d":"M21.974731440140204,12.998782739598028c.03271484375-.3289794921875.050537109369543-.66241455078125.050537109369543-1,0-5.52288818359375-4.477172851559772-10-10-10S2.025268549509747,6.475894556004278,2.025268549509747,11.998782739598028c0,.33758544921875.017822265630457.6710205078125.050537109380457,1","key":"7"})
  );
});

DomainNameGlobe1.displayName = 'DomainNameGlobe1';

module.exports = DomainNameGlobe1;
module.exports.DomainNameGlobe1 = DomainNameGlobe1;
module.exports.default = DomainNameGlobe1;
