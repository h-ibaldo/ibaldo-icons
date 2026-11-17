'use strict';

const { createElement, forwardRef } = require('react');

const AgendaContacts0 = forwardRef(function AgendaContacts0(
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
    createElement('rect', {"x":"4","y":"2.999999999998181","width":"18","height":"18","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"2","y1":"6.999999999998181","x2":"5","y2":"6.999999999998181","key":"1"}),
    createElement('line', {"x1":"2","y1":"11.999999999998181","x2":"5","y2":"11.999999999998181","key":"2"}),
    createElement('line', {"x1":"2","y1":"16.999999999998181","x2":"5","y2":"16.999999999998181","key":"3"}),
    createElement('circle', {"cx":"13","cy":"9.999999999998181","r":"3","key":"4"}),
    createElement('path', {"d":"M17,16.999999999998181v-.000003999999535c0-2.209136777590174-1.790859209821065-3.999996000000465-3.999996000000465-3.999996000000465h-.00000799999907c-2.2091367901794,0-3.999996000000465,1.79085922241029-3.999996000000465,3.999996000000465v.000003999999535","key":"5"})
  );
});

AgendaContacts0.displayName = 'AgendaContacts0';

module.exports = AgendaContacts0;
module.exports.AgendaContacts0 = AgendaContacts0;
module.exports.default = AgendaContacts0;
