"use strict";

const { forwardRef } = require('react');

const EyeHideCrossedBar3 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="3.92419434522526" y1="19.997562039442528" x2="19.92419434522526" y2="3.997562039442528" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16.80944825147526,7.112369168348778c-1.493896484378638-.71038818359375-3.157958984378638-1.11480712890625-4.88525390625-1.11480712890625-4.272705078128638,0-8.178466796878638,2.44097900390625-10,6,1.085205078121362,2.12030029296875,2.913330078121362,3.8382568359375,5.11474609375,4.88519287109375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.36950684522526,6.954898465223778c-.281005859378638.62493896484375-.4453125,1.3131103515625-.4453125,2.04266357421875,0,2.166259765625,1.3857421875,3.99298095703125,3.3125,4.68743896484375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.96911622022526,17.952701199598778c.315673828121362.02850341796875.634033203121362.04486083984375.955078125.04486083984375,4.272705078121362,0,8.178466796871362-2.44097900390625,10-6-.5439453125-1.063232421875-1.28515625-2.0159912109375-2.156494140628638-2.84356689453125" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

EyeHideCrossedBar3.displayName = 'EyeHideCrossedBar3';

module.exports = EyeHideCrossedBar3;
module.exports.EyeHideCrossedBar3 = EyeHideCrossedBar3;
module.exports.default = EyeHideCrossedBar3;
