"use strict";

const { forwardRef } = require('react');

const TouchScreenSpread = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24.000000000001819",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="16.025268539257922" cy="7.998779303641641" r="3.000000000001364" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="22.025268539275203 5.998777918128326 22.025268539635363 1.998779650268261 18.025270271775298 1.998779649911739" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.146606429885651" y1="5.877441413016641" x2="22.025268539255194" y2="1.998779303641641" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <circle cx="8.02526853996369" cy="15.998779303590709" r="3.000000000001364" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="2.025268539755416 17.998780688565603 2.02526853904601 21.998778956425667 6.025266806906075 21.998778957142349" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.903930649144968" y1="18.120117194022896" x2="2.025268539415265" y2="21.998779303052288" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TouchScreenSpread.displayName = 'TouchScreenSpread';

module.exports = TouchScreenSpread;
module.exports.TouchScreenSpread = TouchScreenSpread;
module.exports.default = TouchScreenSpread;
