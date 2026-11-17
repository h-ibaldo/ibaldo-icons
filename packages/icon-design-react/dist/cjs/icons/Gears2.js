'use strict';

const { createElement, forwardRef } = require('react');

const Gears2 = forwardRef(function Gears2(
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
    createElement('circle', {"cx":"16.5","cy":"7.500000000038199","r":"3.5","key":"0"}),
    createElement('circle', {"cx":"7.5","cy":"16.499999999949068","r":"3.5","key":"1"}),
    createElement('polyline', {"points":"19.23681640625 9.657348632808862 21.01318359375 10.682983398438409 21.51318359375 9.817016601558862 19.745361328121362 8.796386718748181","key":"2"}),
    createElement('polyline', {"points":"16 10.949584960938409 16 12.999999999998181 17 12.999999999998181 17 10.949584960938409","key":"3"}),
    createElement('polyline', {"points":"13.254638671871362 8.796386718748181 11.48681640625 9.817016601558862 11.98681640625 10.682983398438409 13.76318359375 9.657470703117724","key":"4"}),
    createElement('polyline', {"points":"13.76318359375 5.342529296867724 11.98681640625 4.317016601558862 11.48681640625 5.182983398438409 13.254638671871362 6.203613281248181","key":"5"}),
    createElement('polyline', {"points":"17 4.050415039058862 17 1.999999999998181 16 1.999999999998181 16 4.050415039058862","key":"6"}),
    createElement('polyline', {"points":"19.745361328121362 6.203613281248181 21.51318359375 5.182983398438409 21.01318359375 4.317016601558862 19.23681640625 5.342651367188409","key":"7"}),
    createElement('polyline', {"points":"10.745361328121362 15.203613281248181 12.51318359375 14.1829833984375 12.01318359375 13.317016601558862 10.23681640625 14.3426513671875","key":"8"}),
    createElement('polyline', {"points":"10.23681640625 18.657348632808862 12.01318359375 19.6829833984375 12.51318359375 18.817016601558862 10.745361328121362 17.796386718748181","key":"9"}),
    createElement('polyline', {"points":"7 19.9495849609375 7 21.999999999998181 8 21.999999999998181 8 19.9495849609375","key":"10"}),
    createElement('polyline', {"points":"4.254638671871362 17.796386718748181 2.48681640625 18.817016601558862 2.98681640625 19.6829833984375 4.76318359375 18.657470703117724","key":"11"}),
    createElement('polyline', {"points":"4.76318359375 14.342529296867724 2.98681640625 13.317016601558862 2.48681640625 14.1829833984375 4.254638671871362 15.203613281248181","key":"12"}),
    createElement('polyline', {"points":"8 13.050415039058862 8 10.999999999998181 7 10.999999999998181 7 13.050415039058862","key":"13"})
  );
});

Gears2.displayName = 'Gears2';

module.exports = Gears2;
module.exports.Gears2 = Gears2;
module.exports.default = Gears2;
