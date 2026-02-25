"use strict";

const { forwardRef } = require('react');

const FolderWarning2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M4.99999997868963,20.999999999998181h-1c-1.104569499660101,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500339899-2,2-2h3.929630589660519c.668705935499929,0,1.293168239900297.334201833509724,1.66409989927979.890598573469106l.812536329360228,1.218802853061788c.370931659389498.556396739959382.995393963789866.890598573469106,1.664099899291614.890598573469106h7.929633174768242c1.104569483939486,0,1.999999977761036.895430475789908,2,1.999999959721208l.000000100710167,5.000000040278792" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.99999997868963" y1="14.999999999998181" x2="14.99999997868963" y2="15.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.99999997868963" y1="18.989999999997963" x2="14.99999997868963" y2="18.999999999998181" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.446359335340276,21.999999999998181h9.107281286690522c1.535645337069582,0,2.498379731479872-1.658964344069318,1.736486284249622-2.992277876710432l-4.156333025539425-7.273582794699905c-.943458047549939-1.651051583219669-3.324129756550974-1.651051583219669-4.267587804100913,0l-4.156333025540334,7.273582794699905c-.76189344722934,1.333313532641114.200840947170036,2.992277876710432,1.736486284240527,2.992277876710432Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

FolderWarning2.displayName = 'FolderWarning2';

module.exports = FolderWarning2;
module.exports.FolderWarning2 = FolderWarning2;
module.exports.default = FolderWarning2;
