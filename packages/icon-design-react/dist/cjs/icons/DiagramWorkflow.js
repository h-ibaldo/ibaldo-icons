'use strict';

const { createElement, forwardRef } = require('react');

const DiagramWorkflow = forwardRef(function DiagramWorkflow(
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
    createElement('rect', {"x":"1.999999999994543","y":"2","width":"8","height":"8","key":"0"}),
    createElement('rect', {"x":"13.999999999994543","y":"14","width":"8","height":"8","key":"1"}),
    createElement('circle', {"cx":"17.999999999996817","cy":"6","r":"4.000000000001137","key":"2"}),
    createElement('line', {"x1":"9.999999999994543","y1":"6","x2":"13.999999999994543","y2":"6","key":"3"}),
    createElement('line', {"x1":"9.999999999994543","y1":"18","x2":"13.999999999994543","y2":"18","key":"4"}),
    createElement('rect', {"x":"3.171572875248353","y":"15.17157287525381","width":"5.65685424949238","height":"5.656854249492381","transform":"translate(-10.970562748478741 9.514718625757576) rotate(-45.000000000000014)","key":"5"}),
    createElement('line', {"x1":"5.999999999994543","y1":"14","x2":"5.999999999994543","y2":"10","key":"6"})
  );
});

DiagramWorkflow.displayName = 'DiagramWorkflow';

module.exports = DiagramWorkflow;
module.exports.DiagramWorkflow = DiagramWorkflow;
module.exports.default = DiagramWorkflow;
