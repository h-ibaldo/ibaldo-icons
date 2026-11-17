'use strict';

const { createElement, forwardRef } = require('react');

const Bell5SquareSilent = forwardRef(function Bell5SquareSilent(
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
    createElement('rect', {"x":"1.974731449505271","y":"2.000000000480213","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement('line', {"x1":"20.510253910442771","y1":"3.464477539539075","x2":"3.439208988564133","y2":"20.535522461417713","key":"1"}),
    createElement('path', {"d":"M8.974731449505271,15.000000000480213h7.131469726558862c.798706054691138,0,1.27508544921875-.89013671875.832092285159888-1.5546875l-.96356201171875-1.4453125v-2c0-.586181640621362-.13311767578125-1.138671875-.359619140632276-1.640380859371362","key":"2"}),
    createElement('path', {"d":"M12.866821293255271,6.107910156730213c-.287780761722388-.065795898441138-.584350585941138-.10791015625-.89208984375-.10791015625-2.209167480472388,0-4,1.790771484378638-4,4v1","key":"3"}),
    createElement('line', {"x1":"10.974731449505271","y1":"18.000000000480213","x2":"12.974731449505271","y2":"18.000000000480213","key":"4"})
  );
});

Bell5SquareSilent.displayName = 'Bell5SquareSilent';

module.exports = Bell5SquareSilent;
module.exports.Bell5SquareSilent = Bell5SquareSilent;
module.exports.default = Bell5SquareSilent;
