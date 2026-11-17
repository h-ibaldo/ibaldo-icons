'use strict';

const { createElement, forwardRef } = require('react');

const QuestionSquare = forwardRef(function QuestionSquare(
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
    createElement('rect', {"x":"2.000000000224645","y":"2.032754075946286","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement('g', {"key":"1"},
      createElement('path', {"d":"M9.000000000224645,10.032754075946286v-.171575701362599c0-1.562095606186631,1.266328692448042-2.828424298637401,2.828424298635582-2.828424298637401h.343151399451926c1.562095603097987,0,2.82842429426546,1.266328687630448,2.828424298636492,2.828424290728435v.000004000001354c.000000002096385.750144767000165-.297993845378187,1.469565557930764-.828426297000078,1.999998009538103l-2.171573699723922,2.171573699732107","key":"0"}),
      createElement('line', {"x1":"12.000000000224645","y1":"17.042754075946505","x2":"12.000000000224645","y2":"17.032754075946286","key":"1"}))
  );
});

QuestionSquare.displayName = 'QuestionSquare';

module.exports = QuestionSquare;
module.exports.QuestionSquare = QuestionSquare;
module.exports.default = QuestionSquare;
