'use strict';

const { createElement, forwardRef } = require('react');

const LogoutArrowOut4 = forwardRef(function LogoutArrowOut4(
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
    createElement('polyline', {"points":"4.974731450043691 15.000000000481123 1.974731450043691 12.000000000481123 4.974731450043691 9.000000000481123","key":"0"}),
    createElement('line', {"x1":"12.974731450043691","y1":"12.000000000481123","x2":"1.974731450043691","y2":"12.000000000481123","key":"1"}),
    createElement('path', {"d":"M1.974731450043691,6.056394887018541v-3.056394886537419c0-.552284749832324.447715250171314-1,1-1h18c.552284749832324,0,1,.447715250167676,1,1v18c0,.552284749828686-.447715250167676,1-1,1H2.974731450043691c-.552284749828686,0-1-.447715250171314-1-1v-2.943605113462581","key":"2"})
  );
});

LogoutArrowOut4.displayName = 'LogoutArrowOut4';

module.exports = LogoutArrowOut4;
module.exports.LogoutArrowOut4 = LogoutArrowOut4;
module.exports.default = LogoutArrowOut4;
