'use strict';

const { createElement, forwardRef } = require('react');

const TouchScreenSpread = forwardRef(function TouchScreenSpread(
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
    createElement('circle', {"cx":"16.025268539257922","cy":"7.998779303641641","r":"3.000000000001364","key":"0"}),
    createElement('polyline', {"points":"22.025268539275203 5.998777918128326 22.025268539635363 1.998779650268261 18.025270271775298 1.998779649911739","key":"1"}),
    createElement('line', {"x1":"18.146606429885651","y1":"5.877441413016641","x2":"22.025268539255194","y2":"1.998779303641641","key":"2"}),
    createElement('circle', {"cx":"8.02526853996369","cy":"15.998779303590709","r":"3.000000000001364","key":"3"}),
    createElement('polyline', {"points":"2.025268539755416 17.998780688565603 2.02526853904601 21.998778956425667 6.025266806906075 21.998778957142349","key":"4"}),
    createElement('line', {"x1":"5.903930649144968","y1":"18.120117194022896","x2":"2.025268539415265","y2":"21.998779303052288","key":"5"})
  );
});

TouchScreenSpread.displayName = 'TouchScreenSpread';

module.exports = TouchScreenSpread;
module.exports.TouchScreenSpread = TouchScreenSpread;
module.exports.default = TouchScreenSpread;
