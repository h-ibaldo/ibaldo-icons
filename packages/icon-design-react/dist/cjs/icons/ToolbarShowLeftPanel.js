'use strict';

const { createElement, forwardRef } = require('react');

const ToolbarShowLeftPanel = forwardRef(function ToolbarShowLeftPanel(
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
    createElement('rect', {"x":"2.050537047695798","y":"1.997697219531346","width":"20","height":"19.999864816291392","rx":"2.00000000000091","ry":"2.00000000000091","transform":"translate(24.101074094785993 23.99525925596236) rotate(-180)","key":"0"}),
    createElement('polyline', {"points":"2.050623966566491 5.997562035775445 7.050623966566491 5.997562035775445 7.050623966566491 17.997426743134383 2.050623966566491 17.997426743134383","key":"1"})
  );
});

ToolbarShowLeftPanel.displayName = 'ToolbarShowLeftPanel';

module.exports = ToolbarShowLeftPanel;
module.exports.ToolbarShowLeftPanel = ToolbarShowLeftPanel;
module.exports.default = ToolbarShowLeftPanel;
