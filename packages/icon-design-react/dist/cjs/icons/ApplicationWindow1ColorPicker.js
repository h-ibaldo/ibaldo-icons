"use strict";

const { forwardRef } = require('react');

const ApplicationWindow1ColorPicker = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M7.000000000184627,22.000000000448381h-3c-1.104569499661011,0-2-.895430500338989-2-2V4.000000000448381c0-1.10456949966192.895430500338989-2,2-2h16c1.104569499661011,0,2,.89543050033808,2,2v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="2.000000000184627" y1="8.000000000448381" x2="22.000000000184627" y2="8.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.414214148316205,14.41421297704801l-5.315194634485124,5.315194634665204c-.558402184055922.558402184029546-1.269598081565164.939022677463072-2.043962584221845,1.093895577974763l-2.347950148221571.469590029588289.469590029698338-2.347950148198834c.154872900545342-.774364502650315.535493394007972-1.485560400140457,1.093895578061165-2.043962584170004l5.315194634484214-5.315194634650652c.78104780247304-.78104780243666,2.047376493883348-.781047802407556,2.828424296320009.000000000062755l.000002828427569.000002828429388c.781047802433022.781047802463036.781047802403009,2.047376493866068-.000000000062755,2.82842429629909Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.000000000184627" y1="22.000000000448381" x2="11.707106781387665" y2="21.292893219276266" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="15.000000000184627" y1="13.000000000448381" x2="20.000000000184627" y2="18.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000184846" y1="5.000000000448381" x2="5.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000184846" y1="5.000000000448381" x2="8.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000184846" y1="5.000000000448381" x2="11.000000000184627" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow1ColorPicker.displayName = 'ApplicationWindow1ColorPicker';

module.exports = ApplicationWindow1ColorPicker;
module.exports.ApplicationWindow1ColorPicker = ApplicationWindow1ColorPicker;
module.exports.default = ApplicationWindow1ColorPicker;
