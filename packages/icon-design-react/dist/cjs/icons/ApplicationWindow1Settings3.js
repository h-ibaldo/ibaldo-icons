'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindow1Settings3 = forwardRef(function ApplicationWindow1Settings3(
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
    createElement('rect', {"x":"2.000000000183718","y":"2.000000000448381","width":"20","height":"20","rx":"2","ry":"2","key":"0"}),
    createElement('line', {"x1":"2.000000000183718","y1":"8.000000000448381","x2":"22.000000000183718","y2":"8.000000000448381","key":"1"}),
    createElement('circle', {"cx":"12.000000000183718","cy":"15.000000000448381","r":"3","key":"2"}),
    createElement('line', {"x1":"12.000000000183718","y1":"11.000000000448381","x2":"12.000000000183718","y2":"12.000000000448381","key":"3"}),
    createElement('line', {"x1":"12.000000000183718","y1":"18.000000000448381","x2":"12.000000000183718","y2":"19.000000000448381","key":"4"}),
    createElement('line', {"x1":"8.535898385105611","y1":"13.000000000344698","x2":"9.401923788876957","y2":"13.500000000370164","key":"5"}),
    createElement('line', {"x1":"14.598076211494117","y1":"16.500000000526597","x2":"15.464101615261825","y2":"17.000000000552973","key":"6"}),
    createElement('line', {"x1":"8.53589838492735","y1":"17.000000000240107","x2":"9.401923788742351","y2":"16.500000000293767","key":"7"}),
    createElement('line', {"x1":"5.010000000183936","y1":"5.000000000448381","x2":"5.000000000183718","y2":"5.000000000448381","key":"8"}),
    createElement('line', {"x1":"8.010000000183936","y1":"5.000000000448381","x2":"8.000000000183718","y2":"5.000000000448381","key":"9"}),
    createElement('line', {"x1":"11.010000000183936","y1":"5.000000000448381","x2":"11.000000000183718","y2":"5.000000000448381","key":"10"}),
    createElement('line', {"x1":"14.598076211628722","y1":"13.500000000604814","x2":"15.464101615440086","y2":"13.000000000655746","key":"11"})
  );
});

ApplicationWindow1Settings3.displayName = 'ApplicationWindow1Settings3';

module.exports = ApplicationWindow1Settings3;
module.exports.ApplicationWindow1Settings3 = ApplicationWindow1Settings3;
module.exports.default = ApplicationWindow1Settings3;
