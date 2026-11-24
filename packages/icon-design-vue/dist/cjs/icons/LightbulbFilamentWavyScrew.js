'use strict';

const { defineComponent, h } = require('vue');

const LightbulbFilamentWavyScrew = defineComponent({
  name: 'LightbulbFilamentWavyScrew',
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
          h('path', {"d":"M19.153373830089549,8.999986216298566c0-3.90548016628054-3.198425409438642-7.063988347090344-7.118778300709891-6.999001031719672-3.654034486209639.060572580609005-6.745141392410005,3.089057010500255-6.876569735310113,6.741229467359517-.073950736448751,2.054966507719655.740256720670004,3.917263580919098,2.08750843370035,5.240391017010552,1.186098059959477,1.16485944670967,1.907839602319655,2.719397554348689,1.907839602319655,4.381843384569947v1.635537162779656c0,1.104569499659192.895430500340808,2,2,2h2c1.104569499661011,0,2-.895430500340808,2-2v-1.638145179229468c0-1.629935114051477.66432946210989-3.188528502771078,1.841982199919585-4.315392516360589,1.329232266731196-1.271906359979766,2.158017800080415-3.060854107030536,2.158017800080415-5.046462304409943Z"}),
          h('line', {"x1":"15.640312306659325","y1":"15.999986216298566","x2":"8.649223439470006","y2":"15.999986216298566"}),
          h('line', {"x1":"15.153373830089549","y1":"18.999986216298566","x2":"9.153373830089549","y2":"18.999986216298566"}),
          h('path', {"d":"M9.162669764060411,9.999986216298566l1-1,.585786437630304.585786437630304c.781048583499796.781048583499796,2.047378541239596.781048583499796,2.828427124739392,0l.585786437630304-.585786437630304,1,1"})
        ]
      );
  }
});

module.exports = LightbulbFilamentWavyScrew;
module.exports.LightbulbFilamentWavyScrew = LightbulbFilamentWavyScrew;
module.exports.default = LightbulbFilamentWavyScrew;
