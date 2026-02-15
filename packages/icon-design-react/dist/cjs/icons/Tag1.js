"use strict";

const { forwardRef } = require('react');

const Tag1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M20.999999997542545,17.998779302937692H7.936749889511702c-.593559685039509,0-1.156454908570595-.26364601991736-1.536442559208808-.719631200670847l-3.866820333041687-4.640184399664577c-.309038293869889-.370845952642412-.309038293869889-.909522846683103,0-1.280368799329153l3.866820333041687-4.640184399664577c.379987650638213-.455985180753487.9428828741693-.719631200670847,1.536442559208808-.719631200670847h13.063250108030843c.552284749828686,0,1,.447715250171314,1,1v10c0,.552284749832324-.447715250171314,1-1,1Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.009999997542764" y1="11.998779302937692" x2="7.999999997542545" y2="11.998779302937692" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Tag1.displayName = 'Tag1';

module.exports = Tag1;
module.exports.Tag1 = Tag1;
module.exports.default = Tag1;
