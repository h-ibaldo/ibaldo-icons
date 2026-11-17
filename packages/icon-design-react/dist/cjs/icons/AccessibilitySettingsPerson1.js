'use strict';

const { createElement, forwardRef } = require('react');

const AccessibilitySettingsPerson1 = forwardRef(function AccessibilitySettingsPerson1(
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
    createElement('circle', {"cx":"7.025268548970416","cy":"4.997565476121054","r":"1","key":"0"}),
    createElement('polyline', {"points":"2.025268548970416 5.99756547607376 5.025268548970416 8.99756547607376 9.025268548970416 8.99756547607376 12.025268548970416 5.99756547607376","key":"1"}),
    createElement('polyline', {"points":"5.025268548970416 8.99756547607376 5.025268548970416 13.99756547607376 3.025268548970416 18.997565476121054","key":"2"}),
    createElement('polyline', {"points":"9.025268548610256 8.997565476121054 9.025268548790336 13.997565476121054 11.025268548970416 18.99756547607376","key":"3"}),
    createElement('line', {"x1":"5.025268548970416","y1":"13.99756547607376","x2":"9.025268548970416","y2":"13.99756547607376","key":"4"}),
    createElement('g', {"key":"5"},
      createElement('circle', {"cx":"17.02526854896746","cy":"12.997565476121054","r":"3.500000000001732","key":"0"}),
      createElement('line', {"x1":"17.025268548970416","y1":"13.007565476121272","x2":"17.025268548970416","y2":"12.997565476121054","key":"1"}),
      createElement('line', {"x1":"15.132025462259662","y1":"8.369862956012184","x2":"15.699998388269705","y2":"9.758173712044481","key":"2"}),
      createElement('line', {"x1":"18.350538709670218","y1":"16.236957240197626","x2":"18.918511635680261","y2":"17.625267996229923","key":"3"}),
      createElement('line', {"x1":"21.652971069080195","y1":"11.10432238940848","x2":"20.264660313039712","y2":"11.672295315423071","key":"4"}),
      createElement('line', {"x1":"13.785876784890206","y1":"14.322835636819036","x2":"12.397566028859728","y2":"14.890808562830898","key":"5"}),
      createElement('line', {"x1":"21.636273407340013","y1":"14.931120284250028","x2":"20.252971949829771","y2":"14.351053841811336","key":"6"}),
      createElement('line', {"x1":"13.797565148110152","y1":"11.644077110427133","x2":"12.41426369059991","y2":"11.064010667984803","key":"7"}),
      createElement('line', {"x1":"15.091713740839623","y1":"17.608570334489741","x2":"15.671780183280134","y2":"16.225268876979499","key":"8"}),
      createElement('line', {"x1":"18.378756914659789","y1":"9.769862075255332","x2":"18.9588233571003","y2":"8.38656061774509","key":"9"}))
  );
});

AccessibilitySettingsPerson1.displayName = 'AccessibilitySettingsPerson1';

module.exports = AccessibilitySettingsPerson1;
module.exports.AccessibilitySettingsPerson1 = AccessibilitySettingsPerson1;
module.exports.default = AccessibilitySettingsPerson1;
