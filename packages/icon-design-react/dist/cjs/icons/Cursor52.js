"use strict";

const { forwardRef } = require('react');

const Cursor52 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M13.575091442160556,21.970769791338171l-3.571664858100121-6.696892163219673-4.168804481210827,3.202863577769676c-.341116594128835.262077514091288-.834634085109428.018888039170633-.834634085100333-.411280711648942l.000000000220098-15.609105866820755c0-.41491997283083.463016232661175-.661861963581032.807586452310716-.430712774550557l12.962580364139285,8.695730994541009c.357233366390574.239644049959679.284254998879987.784964461019626-.123420676289243.922243347278709l-4.982238553340721,1.67769676079115,3.571664858111035,6.696892163219673-3.661069020739887,1.95256467263971Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Cursor52.displayName = 'Cursor52';

module.exports = Cursor52;
module.exports.Cursor52 = Cursor52;
module.exports.default = Cursor52;
