"use strict";

const { forwardRef } = require('react');

const Cursor72 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M18.719116210939319,13.967285156248181L6.548095703130457,2.195434570308862c-.57958984375-.560485839840112-1.548095703130457-.149841308590112-1.548095703130457.656372070308862v16.932556152351026c0,.863037109369543,1.086669921880457,1.244445800779431,1.6259765625.57080078125l2.725708007819776-3.40411376953125,2.140869140619543,5.048950195310681,4.203491210941138-1.782348632810681-2.1640625-5.103942871099207,4.467041015619543.419128417970569c.859130859380457.080627441409888,1.34033203125-.965576171871362.720092773439319-1.565551757810681Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cursor72.displayName = 'Cursor72';

module.exports = Cursor72;
module.exports.Cursor72 = Cursor72;
module.exports.default = Cursor72;
