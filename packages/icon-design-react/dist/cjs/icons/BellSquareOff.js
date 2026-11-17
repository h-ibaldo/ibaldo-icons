'use strict';

const { createElement, forwardRef } = require('react');

const BellSquareOff = forwardRef(function BellSquareOff(
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
    createElement('rect', {"x":"1.974731449503452","y":"2.000000000480213","width":"20","height":"20","rx":"5","ry":"5","key":"0"}),
    createElement('path', {"d":"M13.974731449503452,15.000000000480213v1.000002000000677c0,1.104568395086972-.895429604908713,1.999997999999323-1.999997999999323,1.999997999999323h-.000004000001354c-1.104568395091519,0-1.999997999999323-.895429604912351-1.999997999999323-1.999997999999323v-1.000002000000677","key":"1"}),
    createElement('line', {"x1":"20.510253910439133","y1":"3.464477539539075","x2":"3.439208988564133","y2":"20.535522461417713","key":"2"}),
    createElement('path', {"d":"M8.974731449503452,15.000000000480213h7.131469726560681c.798706054689319,0,1.275085449220569-.89013671875.832092285157159-1.5546875l-.963562011717841-1.4453125v-2c0-.586181640621362-.133117675782159-1.138671875-.359619140625-1.640380859371362","key":"3"}),
    createElement('path', {"d":"M12.866821293253452,6.107910156730213c-.28778076171875-.065795898441138-.584350585939319-.10791015625-.89208984375-.10791015625-2.20916748046875,0-4,1.790771484378638-4,4v1","key":"4"})
  );
});

BellSquareOff.displayName = 'BellSquareOff';

module.exports = BellSquareOff;
module.exports.BellSquareOff = BellSquareOff;
module.exports.default = BellSquareOff;
