'use strict';

const { createElement, forwardRef } = require('react');

const BurstDotted = forwardRef(function BurstDotted(
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
    createElement('line', {"x1":"21.99999999955071","y1":"8.990000001882436","x2":"21.99999999945976","y2":"9.000000000984073","key":"0"}),
    createElement('line', {"x1":"21.99999999955071","y1":"11.990000001882436","x2":"21.99999999945976","y2":"12.000000000984073","key":"1"}),
    createElement('line', {"x1":"21.99999999955071","y1":"14.990000001882436","x2":"21.99999999945976","y2":"15.000000000984073","key":"2"}),
    createElement('line', {"x1":"21.99999999955071","y1":"17.990000001882436","x2":"21.99999999945976","y2":"18.000000000984073","key":"3"}),
    createElement('line', {"x1":"18.99999999945976","y1":"20.990000000983855","x2":"19.00000000036016","y2":"21.000000000896762","key":"4"}),
    createElement('line', {"x1":"15.99999999945976","y1":"20.990000000983855","x2":"16.00000000036016","y2":"21.000000000896762","key":"5"}),
    createElement('line', {"x1":"12.99999999945976","y1":"20.990000000983855","x2":"13.00000000036016","y2":"21.000000000896762","key":"6"}),
    createElement('line', {"x1":"9.99999999945976","y1":"20.990000000983855","x2":"10.00000000036016","y2":"21.000000000896762","key":"7"}),
    createElement('line', {"x1":"6.99999999945976","y1":"21.000000000984073","x2":"7.00000000036016","y2":"20.990000000896543","key":"8"}),
    createElement('line', {"x1":"21.99999999955071","y1":"21.000000001882654","x2":"21.99999999945976","y2":"20.990000000983855","key":"9"}),
    createElement('polyline', {"points":"18.99999999945976 6.000000000987711 18.99999999855936 18.000000000984073 4.99999999855936 17.999999999907232","key":"10"}),
    createElement('rect', {"x":"2.000000002384695","y":"3.000000000311047","width":"14.000000000265572","height":"11.999999999641659","transform":"translate(18.000000004202384 18.000000001096332) rotate(-180)","key":"11"})
  );
});

BurstDotted.displayName = 'BurstDotted';

module.exports = BurstDotted;
module.exports.BurstDotted = BurstDotted;
module.exports.default = BurstDotted;
