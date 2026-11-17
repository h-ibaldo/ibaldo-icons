'use strict';

const { createElement, forwardRef } = require('react');

const Lock3Check2Open = forwardRef(function Lock3Check2Open(
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
    createElement('path', {"d":"M15.527343744516656,5.000000000480213c-.772216796875-1.764404296875-2.5286865234375-3-4.577880859375-3-2.761474609375,0-5,2.23858642578125-5,5v3","key":"0"}),
    createElement('path', {"d":"M10.949462885141656,22.000000000480213h-6c-.552284749830505,0-1-.447715250171314-1-1v-10c0-.552284749832324.447715250169495-1,1-1h12c.552284749830505,0,1,.447715250167676,1,1v4","key":"1"}),
    createElement('polyline', {"points":"13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213","key":"2"})
  );
});

Lock3Check2Open.displayName = 'Lock3Check2Open';

module.exports = Lock3Check2Open;
module.exports.Lock3Check2Open = Lock3Check2Open;
module.exports.default = Lock3Check2Open;
