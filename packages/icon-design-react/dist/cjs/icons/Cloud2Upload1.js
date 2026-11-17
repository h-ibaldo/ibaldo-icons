'use strict';

const { createElement, forwardRef } = require('react');

const Cloud2Upload1 = forwardRef(function Cloud2Upload1(
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
    createElement('path', {"d":"M18.986206067289459,11.13714596959835c.001586914060681-.046569824229664.013793945310681-.09014892578125.013793945310681-.137145996101026,0-2.20916748046875-1.790832519529431-4-4-4-.137084960930224,0-.266723632810681.02685546875-.400268554680224.04034423828125-.762390136720569-1.787048339840112-2.534118652349207-3.04034423828125-4.599731445319776-3.04034423828125-2.761413574209655,0-5,2.23858642578125-5,5,0,.137084960941138.029541015630457.265869140621362.040344238290345.40020751953125-1.787048339851026.76239013671875-3.040344238290345,2.5341796875-3.040344238290345,4.59979248046875,0,2.761413574211474,2.238586425790345,5,5,5h11c2.209167480470569,0,4-1.790832519538526,4-4,0-1.866821289058862-1.284423828119543-3.421691894538526-3.013793945310681-3.862854003898974Z","key":"0"}),
    createElement('polyline', {"points":"9 13.999999999998181 12 10.999999973497324 15 13.999999999998181","key":"1"}),
    createElement('line', {"x1":"12","y1":"18.999999999998181","x2":"12","y2":"10.999999999998181","key":"2"})
  );
});

Cloud2Upload1.displayName = 'Cloud2Upload1';

module.exports = Cloud2Upload1;
module.exports.Cloud2Upload1 = Cloud2Upload1;
module.exports.default = Cloud2Upload1;
