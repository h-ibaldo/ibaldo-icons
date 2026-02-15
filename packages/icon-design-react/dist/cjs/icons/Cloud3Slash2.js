"use strict";

const { forwardRef } = require('react');

const Cloud3Slash2 = forwardRef(({
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
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="3.000000000001819" y1="20.999999946998287" x2="20.999999999998181" y2="5.999999974228558" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.976562525193003,5.519531223497324c-1.0577392578125-.942504882808862-2.447265625-1.51953125-3.9765625-1.51953125-3.004638671882276,0-5.486083984382276,2.2109375-5.92431640625,5.093139648441138-2.318603515632276.434509277340112-4.07568359375,2.462036132808862-4.07568359375,4.906860351558862,0,.94024658203125.275390625,1.809814453110448.726684570308862,2.561096191409888" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.649536158001865,18.792053196157212c.432250976558862.121826171871362.879272460941138.207946777340112,1.350463867191138.207946777340112h10c2.761474609373181,0,4.999999999998181-2.238586425788526,4.999999999998181-5,0-2.44482421875-1.757080078125-4.47235107421875-4.075683593748181-4.906860351558862-.0230712890625-.15148925783069-.073974609382276-.292419433601026-.108154296882276-.43994140625" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud3Slash2.displayName = 'Cloud3Slash2';

module.exports = Cloud3Slash2;
module.exports.Cloud3Slash2 = Cloud3Slash2;
module.exports.default = Cloud3Slash2;
