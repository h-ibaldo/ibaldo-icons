"use strict";

const { forwardRef } = require('react');

const Cloud3Warning2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<g>
    <line x1="15" y1="14.999999973497324" x2="15" y2="15.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="15" y1="18.989999973497106" x2="15" y2="18.999999973497324" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.446359356659741,21.999999973497324h9.107281286689613c1.535645337071401,0,2.498379731470777-1.658964344069318,1.736486284240527-2.992277876719527l-4.156333025539425-7.273582794699905c-.943458047549939-1.651051583210574-3.324129756550974-1.651051583210574-4.267587804100913,0l-4.156333025539425,7.273582794699905c-.76189344723025,1.333313532650209.200840947169127,2.992277876719527,1.736486284249622,2.992277876719527Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <path d="M21.899230957029431,12.999999973497324c.065612792970569-.323181152340112.100769042970569-.657470703139552.100769042970569-1,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386709655-2.882202148441138-2.919616699209655-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671869543,0-5.486083984369543,2.2109375-5.924255371090112,5.093139648441138-2.318725585939319.434509277340112-4.075744628909888,2.462036132808862-4.075744628909888,4.906860351558862,0,2.418884277340112,1.717834472659888,4.43585205078125,4,4.89923095703125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cloud3Warning2.displayName = 'Cloud3Warning2';

module.exports = Cloud3Warning2;
module.exports.Cloud3Warning2 = Cloud3Warning2;
module.exports.default = Cloud3Warning2;
