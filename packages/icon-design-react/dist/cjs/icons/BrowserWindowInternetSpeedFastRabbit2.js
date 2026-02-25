"use strict";

const { forwardRef } = require('react');

const BrowserWindowInternetSpeedFastRabbit2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M21.999999994002792,13.998779299956368l-.00000000072032-10.000000000451109c-.000000000049113-1.104569499661011-.895430500429939-1.999999999959982-2.00000000008913-1.999999999909051l-15.999999999641659.000000000721229c-1.104569499659192.000000000046384-1.999999999959982.895430500425391-1.999999999909051,2.000000000086402l.00000000036016,5.999999999552529" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="1.999999993642632" y1="7.998779299956368" x2="21.999999993642632" y2="7.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.989999994002574" y1="4.998779299956368" x2="4.999999994002792" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.989999994002574" y1="4.998779299956368" x2="7.999999994002792" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.999999993642632" y1="4.998779299956368" x2="10.999999994002792" y2="4.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3.999999993642632,18.998779299956368l1,1,1.538489436739837-2.307734155110666c.304657009950461-.456985514920234.696790893229263-.849119398204493,1.153776408149497-1.153776408151316l.000181326729944-.000120884480566c1.397341552121361-.931561042354588,3.217764089820776-.931561045174021,4.615105645430958-.000000007735252l.692447182949763.4616314554778" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12.999999993642632,16.998779299956368l-.452080808649043-.67812121298266c-1.009321377940068-1.513982066895551-1.547919191350957-3.292849803576246-1.547919191350957-5.112429794353375v-.209448992663965l.000003000001016.000001000000339c1.944365720059068.648121847079892,3.617230292398744,1.925848938593845,4.754111284499231,3.631170426746394l.245885715499753.368828573253268" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999993642632,14.998779299956368h.000002000000677c1.28057720932884,0,2.508705317090062.508707317087101,3.414210148159327,1.414212148160004l.585787851839996.585787851839996-1.10940039244997,1.664100588674046c-.556397336829832.834596005242929-1.493091319280211,1.335899411325954-2.49615088300925,1.335899411325954h-.39444872454078l-1,1,2,1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M10.999999993642632,21.998779299956368c0-1.104569499599165-.895430500400835-2-2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.999999993642632" y1="11.998779299956368" x2="4.999999993642632" y2="11.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.999999993642632" y1="14.998779299956368" x2="1.999999993642632" y2="14.998779299956368" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BrowserWindowInternetSpeedFastRabbit2.displayName = 'BrowserWindowInternetSpeedFastRabbit2';

module.exports = BrowserWindowInternetSpeedFastRabbit2;
module.exports.BrowserWindowInternetSpeedFastRabbit2 = BrowserWindowInternetSpeedFastRabbit2;
module.exports.default = BrowserWindowInternetSpeedFastRabbit2;
