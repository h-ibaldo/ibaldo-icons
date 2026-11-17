"use strict";

const { forwardRef } = require('react');

const Trash9 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M4.999999990141077,6.000000002694833l.00000000062937,14c.000000000049113,1.104569499661011.895430500419025,1.999999999959982,2.00000000008913,1.99999999990996l10-.000000000448381c1.104569499661011-.000000000051841,1.999999999959982-.895430500430848,1.99999999991087-2.000000000091859l-.00000000062937-13.999999999997272" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20.999999990141077" y1="6.000000001978151" x2="2.999999990141077" y2="6.000000002785782" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.999999990141077,6.000000002516572l-.000000000101863-2.353921007720601c-.000000000049113-.909104324454347.736974667750474-1.64607899231487,1.646078992200273-1.646078992354887l2.707842015441202-.000000000120963c.9091043244498-.000000000041837,1.646078992309413.736974667752293,1.646078992358525,1.646078992204821l.000000000101863,2.35392100772242" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Trash9.displayName = 'Trash9';

module.exports = Trash9;
module.exports.Trash9 = Trash9;
module.exports.default = Trash9;
