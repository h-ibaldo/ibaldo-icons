"use strict";

const { forwardRef } = require('react');

const ApplicationWindow2Pdf2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M8.00000000018008,22.000000000448381l-4,.000000000001819c-1.104569499659192,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500340808-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499659192,0,2,.89543050033808,2,2v10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.246091562379661,12.0000000004502c.928425217769473,0,1.830919506370265,1.740932356922713.303652681561289,5.530816699956631-1.551935447210781,3.851099072698162-2.799999282191493,5.198844275024385-3.730590087820019,4.099311201144701-.686013975981041-.810555027155715.889268567440013-2.212326679981743,4.619858655260032-3.318490019973979,3.209373738178328-.951616631670731,5.812779904268609-.802510658422761,5.541548382618203.528454961986426-.333475469318728,1.636404139958358-2.857665135419666.663785828318396-5.194516746538284-1.743065688250681-3.066844255930846-3.158710939682351-2.468378102870702-5.097027154863099-1.53995288508122-5.097027154863099Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow2Pdf2.displayName = 'ApplicationWindow2Pdf2';

module.exports = ApplicationWindow2Pdf2;
module.exports.ApplicationWindow2Pdf2 = ApplicationWindow2Pdf2;
module.exports.default = ApplicationWindow2Pdf2;
