'use strict';

const { createElement, forwardRef } = require('react');

const Bell1Silent = forwardRef(function Bell1Silent(
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
    createElement('path', {"d":"M14.000000004471076,18.000000003885361v2.000002000001587c0,1.1045683950897-.895429604921446,1.999997999998413-1.999998000010237,1.999997999998413h-.000004000001354c-1.10456839509061,0-1.999997999988409-.895429604908713-1.999997999988409-1.999997999998413v-2.000002000001587","key":"0"}),
    createElement('line', {"x1":"21.000000004471076","y1":"3.000000003886271","x2":"3.000000004471076","y2":"21.000000003885361","key":"1"}),
    createElement('path', {"d":"M6.000000004471076,18.000000003885361h13c.552307128909888,0,1-.44775390625,1-1,0-1.304321289057953-.837463378911707-2.403076171867724-2-2.8162841796875v-6.1837158203125c0-.6058349609375-.091735839840112-1.18994140625-.258728027340112-1.741210937499091","key":"2"}),
    createElement('path', {"d":"M15.709777836489593,3.290283207016728c-1.021362304680224-.8056640625-2.307922363268517-1.290283203130457-3.709777832018517-1.290283203130457-3.313720703130457,0-6,2.686279296880457-6,5.999999999999091v5","key":"3"}),
    createElement('line', {"x1":"10.000000004471076","y1":"14.000000003885361","x2":"18.000000004471076","y2":"14.000000003885361","key":"4"})
  );
});

Bell1Silent.displayName = 'Bell1Silent';

module.exports = Bell1Silent;
module.exports.Bell1Silent = Bell1Silent;
module.exports.default = Bell1Silent;
