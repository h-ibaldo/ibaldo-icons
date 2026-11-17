'use strict';

const { createElement, forwardRef } = require('react');

const AccessibilitySettingsPersonGearCircle1 = forwardRef(function AccessibilitySettingsPersonGearCircle1(
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
    createElement('g', {"key":"0"},
      createElement('circle', {"cx":"17.02526854896746","cy":"16.997565476121054","r":"3.500000000001732","key":"0"}),
      createElement('line', {"x1":"17.025268548970416","y1":"17.007565476121272","x2":"17.025268548970416","y2":"16.997565476121054","key":"1"}),
      createElement('line', {"x1":"15.132025462259662","y1":"12.369862956012184","x2":"15.699998388269705","y2":"13.758173712044481","key":"2"}),
      createElement('line', {"x1":"18.350538709670218","y1":"20.236957240197626","x2":"18.918511635680261","y2":"21.625267996229923","key":"3"}),
      createElement('line', {"x1":"21.652971069080195","y1":"15.104322389411209","x2":"20.264660313039712","y2":"15.672295315423071","key":"4"}),
      createElement('line', {"x1":"13.785876784890206","y1":"18.322835636819036","x2":"12.397566028859728","y2":"18.890808562830898","key":"5"}),
      createElement('line', {"x1":"21.636273407340013","y1":"18.931120284250028","x2":"20.252971949829771","y2":"18.351053841811336","key":"6"}),
      createElement('line', {"x1":"13.797565148110152","y1":"15.644077110430771","x2":"12.41426369059991","y2":"15.064010667988441","key":"7"}),
      createElement('line', {"x1":"15.091713740839623","y1":"21.608570334493379","x2":"15.671780183280134","y2":"20.225268876983137","key":"8"}),
      createElement('line', {"x1":"18.378756914659789","y1":"13.76986207525897","x2":"18.9588233571003","y2":"12.38656061774509","key":"9"})),
    createElement('circle', {"cx":"11.025268548970416","cy":"6.997565476121054","r":"1","key":"1"}),
    createElement('polyline', {"points":"7.025268548970416 8.99756547607376 10.025268548970416 10.99756547607376 12.025268548970416 10.99756547607376 15.025268548970416 8.99756547607376","key":"2"}),
    createElement('polyline', {"points":"10.025268548970416 10.99756547607376 10.025268548970416 12.99756547607376 8.025268548970416 15.997565476121054","key":"3"}),
    createElement('polyline', {"points":"10.025268548970416 12.99756547607376 12.025268548970416 11.997565476121054 12.025268548970416 10.997565476121054","key":"4"}),
    createElement('path', {"d":"M19.896362298970416,9.537360397996054c-.698974609370453-4.27447509765625-4.39892578125-7.539794921875-8.87109375-7.539794921875C6.054565423970416,1.997565476121054,2.025268548970416,6.026984421433554,2.025268548970416,10.997565476121054c0,4.47216796875,3.265380859379547,8.1719970703125,7.539794921879547,8.87109375","key":"5"})
  );
});

AccessibilitySettingsPersonGearCircle1.displayName = 'AccessibilitySettingsPersonGearCircle1';

module.exports = AccessibilitySettingsPersonGearCircle1;
module.exports.AccessibilitySettingsPersonGearCircle1 = AccessibilitySettingsPersonGearCircle1;
module.exports.default = AccessibilitySettingsPersonGearCircle1;
