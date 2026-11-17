"use strict";

const { forwardRef } = require('react');

const Heart2Add = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="14.974731449499814" y1="18.000000000480213" x2="20.974731449499814" y2="18.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.974731449499814" y1="15.000000000480213" x2="17.974731449499814" y2="21.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20.985351566690042,12.805114746573963c1.422729492180224-2.0562744140625,1.124633789059772-4.94293212890625-.921142578129547-6.632507324219659-1.993286132810681-1.646179199217841-4.962158203120453-1.350219726560681-6.790161132810681.477783203125909l-1.349548339840112,1.349609375-1.349609375-1.349609375c-1.828002929689319-1.828002929686591-4.796875-2.12396240234375-6.790161132819776-.477783203125909-2.286560058590112,1.888427734375909-2.406677246090112,5.280944824219659-.360229492180224,7.327392578125909.998291015620453.998291015625,2.077331542960565,1.91241455078125,3.226135253900793,2.73297119140625l5.273864746099207,3.76702880859375" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Heart2Add.displayName = 'Heart2Add';

module.exports = Heart2Add;
module.exports.Heart2Add = Heart2Add;
module.exports.default = Heart2Add;
