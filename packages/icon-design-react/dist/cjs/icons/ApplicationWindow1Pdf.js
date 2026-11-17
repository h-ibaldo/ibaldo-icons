'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindow1Pdf = forwardRef(function ApplicationWindow1Pdf(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M8.000000000184627,22.000000000448381h-4c-1.104569499661011,0-2-.89543050033717-2-2V4.000000000448381c0-1.10456949966192.895430500338989-2,2-2h16c1.104569499661011,0,2,.89543050033808,2,2v10","key":"0"}),
    createElement('line', {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"1"}),
    createElement('path', {"d":"M15.246091562373294,12.0000000004502c.928425217775839,0,1.830919506371174,1.740932356922713.303652681565836,5.530816699956631-1.551935447205324,3.851099072698162-2.799999282183308,5.198844275024385-3.730590087814562,4.099311201144701-.686013975978312-.810555027155715.88926856744547-2.212326679981743,4.619858655259122-3.318490019973979,3.209373738184695-.951616631670731,5.812779904271338-.802510658422761,5.541548382619112.528454961986426-.333475469322366,1.636404139958358-2.857665135420575.663785828318396-5.19451674654465-1.743065688250681-3.066844255928117-3.158710939682351-2.468378102859788-5.097027154863099-1.539952885084858-5.097027154863099Z","key":"2"}),
    createElement('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"5"})
  );
});

ApplicationWindow1Pdf.displayName = 'ApplicationWindow1Pdf';

module.exports = ApplicationWindow1Pdf;
module.exports.ApplicationWindow1Pdf = ApplicationWindow1Pdf;
module.exports.default = ApplicationWindow1Pdf;
