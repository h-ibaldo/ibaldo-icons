"use strict";

const { forwardRef } = require('react');

const BulbIdea18 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<line x1="12" y1="2.41288078324942" x2="12" y2="4.41288078324942" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.928932188289764" y1="5.341812971228137" x2="6.343145750630356" y2="6.756026533628756" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2" y1="12.412880782758293" x2="4" y2="12.412880782849243" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="19.071067812019464" y1="5.341812971197214" x2="17.656854249620665" y2="6.756026533537806" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="22" y1="12.412880782858338" x2="20" y2="12.412880782858338" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11" y1="21.41288078324942" x2="13" y2="21.41288078324942" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M17,12.41288078324942c0-2.761413574222388-2.238525390630457-5-5-5-2.761474609380457,0-5,2.238586425777612-5,5,0,1.81396484375.9755859375,3.387329101569776,2.421264648439319,4.263732910159888l.578735351560681,1.736267089840112h4l.578735351560681-1.736267089840112c1.445678710939319-.876403808590112,2.421264648439319-2.449768066409888,2.421264648439319-4.263732910159888Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BulbIdea18.displayName = 'BulbIdea18';

module.exports = BulbIdea18;
module.exports.BulbIdea18 = BulbIdea18;
module.exports.default = BulbIdea18;
