'use strict';

const { createElement, forwardRef } = require('react');

const DragDropExtended = forwardRef(function DragDropExtended(
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
    createElement('path', {"d":"M1.974731450033687,4.000000000459295v-1c0-.552284749828686.447715250169495-1,1-1h1","key":"0"}),
    createElement('path', {"d":"M3.974731449988212,17.000000000459295h-1c-.55228474984051,0-.999999999944521-.447715250184046-.999999999933607-1.000000000022737l.000000000024556-1.000000000066393","key":"1"}),
    createElement('path', {"d":"M14.974731450033687,2.000000000459295h1c.552284749831415,0,1,.447715250171314,1,1v1","key":"2"}),
    createElement('line', {"x1":"7.974731450033687","y1":"2.000000000459295","x2":"10.974731450033687","y2":"2.000000000459295","key":"3"}),
    createElement('line', {"x1":"1.974731450033687","y1":"8.000000000459295","x2":"1.974731450033687","y2":"11.00000000041382","key":"4"}),
    createElement('polygon', {"points":"13.974731450032778 18.000000000456566 11.974731450033687 12.000000000459295 17.974731450032778 14.000000000456566 13.974731450032778 18.000000000456566","key":"5"}),
    createElement('line', {"x1":"17.974731449937281","y1":"18.000000000459295","x2":"15.974731450032778","y2":"16.000000000459295","key":"6"}),
    createElement('rect', {"x":"6.974731450033687","y":"7.000000000459295","width":"15","height":"15","rx":"2","ry":"2","key":"7"})
  );
});

DragDropExtended.displayName = 'DragDropExtended';

module.exports = DragDropExtended;
module.exports.DragDropExtended = DragDropExtended;
module.exports.default = DragDropExtended;
