'use strict';

const { createElement, forwardRef } = require('react');

const ClockAttachment2 = forwardRef(function ClockAttachment2(
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
    createElement('path', {"d":"M2.000000000020009,17.000000000087311l4.171573732300203,4.171573708370488c1.104568478649526,1.1045684785513,2.895427855669368,1.104568375279996,3.999996206919604-.000000230649675l.000004000000445-.000003999999535c1.104568168179867-1.104568422850207,1.104568068429217-2.89542743831953-.000000222800736-3.99999573812056l-5.758594255019489-5.758594297269156c-.550638985529986-.550638989800063-1.443401084959987-.550639295579458-1.994040447680163-.000000682979589l-.005958896290394.005958888177702c-.550639893509469.550639143391891-.550640195409869,1.443402291040911-.000000674309376,1.994041806839959l4.587020556929929,4.587020545412088","key":"0"}),
    createElement('polyline', {"points":"12 6.999999999887223 12 11.999999999887223 17 11.999999999887223","key":"1"}),
    createElement('path', {"d":"M14,21.799072265508585c4.564392089840112-.926513671871362,8-4.961181640621362,8-9.799072265621362,0-5.522827148439319-4.477172851559772-10-10-10-3.698974609369543,0-6.919921875,2.013793945310681-8.649108886719659,5","key":"2"})
  );
});

ClockAttachment2.displayName = 'ClockAttachment2';

module.exports = ClockAttachment2;
module.exports.ClockAttachment2 = ClockAttachment2;
module.exports.default = ClockAttachment2;
