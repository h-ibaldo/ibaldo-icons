'use strict';

const { createElement, forwardRef } = require('react');

const Cursor6 = forwardRef(function Cursor6(
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
    createElement('path', {"d":"M13.922229228690412,14.257451920248059l3.784790039058862-1.69091796875c.329345703121362-.147094726560681.3955078125-.585876464849207.124206542970569-.823608398439319L6.820605693530524,2.094365982748059c-.319702148441138-.280212402349207-.82061767578125-.053161621099207-.82061767578125.372009277340112v14.567626953119543c0,.358337402351026.369201660150793.597778320319776.696411132810681.451599121101026l3.612854003909888-1.61407470703125,2.724853515619543,6.099243164060681,3.612976074220569-1.614135742189319-2.724853515619543-6.099182128900793Z","key":"0"})
  );
});

Cursor6.displayName = 'Cursor6';

module.exports = Cursor6;
module.exports.Cursor6 = Cursor6;
module.exports.default = Cursor6;
