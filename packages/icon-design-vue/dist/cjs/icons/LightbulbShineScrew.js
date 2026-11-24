'use strict';

const { defineComponent, h } = require('vue');

const LightbulbShineScrew = defineComponent({
  name: 'LightbulbShineScrew',
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
          h('path', {"d":"M12.162669764060411,5.999986216298566c-1.656854249400567,0-3,1.343145750599433-3,3"}),
          h('path', {"d":"M19.15801780008951,8.999986216298566c0-3.90548016628054-3.198425409449555-7.063988347090344-7.118778300709891-6.999001031719672-3.654034486209639.060572580609005-6.7451413924191,3.089057010500255-6.876569735319208,6.741229467359517-.07395073645057,2.054966507719655.740256720670004,3.917263580919098,2.08750843370035,5.240391017010552,1.186098059959477,1.16485944670967,1.90783960232875,2.719397554348689,1.90783960232875,4.381843384569947v1.635537162779656c0,1.104569499659192.895430500340808,2,2,2h2c1.104569499661011,0,2-.895430500340808,2-2v-1.638145179229468c0-1.629935114051477.664329462100795-3.188528502771078,1.84198219991049-4.315392516360589,1.329232266729377-1.271906359979766,2.15801780008951-3.060854107030536,2.15801780008951-5.046462304409943Z"}),
          h('line', {"x1":"15.644956276650191","y1":"15.999986216298566","x2":"8.653867409459053","y2":"15.999986216298566"}),
          h('line', {"x1":"15.15801780008951","y1":"18.999986216298566","x2":"9.15801780008951","y2":"18.999986216298566"})
        ]
      );
  }
});

module.exports = LightbulbShineScrew;
module.exports.LightbulbShineScrew = LightbulbShineScrew;
module.exports.default = LightbulbShineScrew;
