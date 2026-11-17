'use strict';

const { createElement, forwardRef } = require('react');

const SirenFlat = forwardRef(function SirenFlat(
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
    createElement('line', {"x1":"20.000000004469257","y1":"21.000000003885361","x2":"4.000000004469257","y2":"21.000000003885361","key":"0"}),
    createElement('path', {"d":"M11.999995000892667,8.000000003562263h.000010005835204c2.759572357823915,0,4.999994990812059,2.240422632988144,4.999994990812059,4.999994990812059v8.000005009511039H7.000000022825475v-8.000005022255905c0-2.759572350789831,2.240422627277361-4.999994978067193,4.999994978067193-4.999994978067193Z","key":"1"}),
    createElement('line', {"x1":"12.000000004469257","y1":"3.000000003885361","x2":"12.000000004469257","y2":"5.000000003885361","key":"2"}),
    createElement('line', {"x1":"17.000000004469257","y1":"4.000000003885361","x2":"16.000000004469257","y2":"6.000000003885361","key":"3"}),
    createElement('line', {"x1":"19.000000004469257","y1":"9.000000003885361","x2":"21.000000004469257","y2":"8.000000003885361","key":"4"}),
    createElement('line', {"x1":"20.000000004469257","y1":"13.000000003885361","x2":"22.000000004469257","y2":"13.000000003885361","key":"5"}),
    createElement('line', {"x1":"7.000000004070898","y1":"4.000000003794412","x2":"8.000000004150934","y2":"6.000000003754394","key":"6"}),
    createElement('line', {"x1":"5.000000004280082","y1":"9.000000003885361","x2":"3.000000004240064","y2":"8.000000003976311","key":"7"}),
    createElement('line', {"x1":"4.000000004469257","y1":"13.000000003936293","x2":"2.000000004469257","y2":"13.000000004016329","key":"8"})
  );
});

SirenFlat.displayName = 'SirenFlat';

module.exports = SirenFlat;
module.exports.SirenFlat = SirenFlat;
module.exports.default = SirenFlat;
