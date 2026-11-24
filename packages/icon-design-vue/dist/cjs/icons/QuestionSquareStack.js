'use strict';

const { defineComponent, h } = require('vue');

const QuestionSquareStack = defineComponent({
  name: 'QuestionSquareStack',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('rect', {"x":"2.000000000224645","y":"2.032754075946286","width":"16","height":"16","rx":"3","ry":"3"}),
          h('path', {"d":"M22.000000000224645,9.032754075946286v10c0,1.656854249489697-1.343145750510303,3-3,3h-10"}),
          h('g', {}, [
            h('path', {"d":"M8.000000000224645,8.032754075946286v-.000002000000677c0-1.104568403690791.895429604908713-1.999997999999323,1.999998000000232-1.999997999999323h.000004000004992c1.104568395079696,0,1.99999799998659.895429604897799,1.999997999990228,1.999997999977495v.00000300001193c.000000000002728.640288606449758-.25435365854446,1.254352658561402-.707106074086369,1.707105074099672l-1.292893925909084,1.292893925910903"}),
            h('line', {"x1":"10.000000000224645","y1":"14.042754075946505","x2":"10.000000000224645","y2":"14.032754075946286"})
          ])
        ]
      );
  }
});

module.exports = QuestionSquareStack;
module.exports.QuestionSquareStack = QuestionSquareStack;
module.exports.default = QuestionSquareStack;
