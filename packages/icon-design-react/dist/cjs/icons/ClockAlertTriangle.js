'use strict';

const { createElement, forwardRef } = require('react');

const ClockAlertTriangle = forwardRef(function ClockAlertTriangle(
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
    createElement('polyline', {"points":"15 5.999999999887223 15 8.999999999887223 18 8.999999999887223","key":"0"}),
    createElement('line', {"x1":"8.556595940450279","y1":"18.989999999887004","x2":"8.556595940450279","y2":"18.999999999887223","key":"1"}),
    createElement('line', {"x1":"8.556595940450279","y1":"14.999999999887223","x2":"8.556595940450279","y2":"15.999999999887223","key":"2"}),
    createElement('path', {"d":"M4.002955297099106,21.999999999887223h9.107281286691432c1.535645337069582,0,2.498379731479872-1.658964344060223,1.736486284249622-2.992277876708613l-4.156333025539425-7.273582794701724c-.943458047549939-1.651051583219669-3.324129756550974-1.651051583219669-4.267587804100913,0l-4.156333025539425,7.273582794701724c-.76189344723025,1.33331353264839.200840947169127,2.992277876708613,1.736486284238708,2.992277876708613Z","key":"3"}),
    createElement('path', {"d":"M12.953369140630457,15.694335937387223c.647583007808862.19775390625,1.334350585930224.3056640625,2.046630859369543.3056640625,3.866027832029431,0,7-3.134033203128638,7-7,0-3.865966796878638-3.133972167970569-7-7-7-3.865966796869543,0-7,3.134033203121362-7,7,0,.531005859371362.064270019529431,1.04638671875.176330566409888,1.54345703125","key":"4"})
  );
});

ClockAlertTriangle.displayName = 'ClockAlertTriangle';

module.exports = ClockAlertTriangle;
module.exports.ClockAlertTriangle = ClockAlertTriangle;
module.exports.default = ClockAlertTriangle;
