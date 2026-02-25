"use strict";

const { forwardRef } = require('react');

const NewspaperNews82 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M21.999988017745636,21.936828613277612H6.828415142495942c-.530432979679972,0-1.039140805480201-.210713680728077-1.41421356238061-.58578643761939l-2.828427124739392-2.828427124750306c-.375072756900408-.375072756898589-.585786437630304-.883780582698819-.585786437630304-1.414213562369696V1.936828613277612l4,2,3-2,3,2,3-2,3,2,3.999999934028892-2,.000000065971108,20Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999988017745636" y1="12.936828613277612" x2="17.999987951774528" y2="12.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.999988017745636" y1="8.936828613277612" x2="17.999987951774528" y2="8.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999988017745636" y1="16.936828613277612" x2="17.999987951774528" y2="16.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="1.999988017745636 16.936828613277612 6.999988017745636 16.936828613277612 6.999988017745636 21.936828613277612" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

NewspaperNews82.displayName = 'NewspaperNews82';

module.exports = NewspaperNews82;
module.exports.NewspaperNews82 = NewspaperNews82;
module.exports.default = NewspaperNews82;
