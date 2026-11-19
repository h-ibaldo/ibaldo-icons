'use strict';

const { defineComponent, h } = require('vue');

const SwitchLeverCup = defineComponent({
  name: 'SwitchLeverCup',
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
          h('ellipse', {"cx":"11.999999977100742","cy":"4.999996563434252","rx":"5","ry":"3"}),
          h('path', {"d":"M16.999999977100742,4.999996563434252v.000002000015229c0,1.327407028991729-.176970399121274,2.648889463416708-.526234285351165,3.929523712922673l-1.947531429308583,7.140948574116919c-.310692850751366,1.13920711944229-1.345417774720772,1.929525712945178-2.526232285341393,1.929525712945178h-.000003999999535c-1.180814510620621,0-2.215539434580933-.790318593499251-2.526232285339574-1.929525712930626l-1.947531429310402-7.140948574124195c-.349263886240806-1.280634249516879-.526234285349346-2.60211668393822-.526234285349346-3.929523712944501v-.000002000000677"}),
          h('path', {"d":"M8.771484352100742,13.495479961871752c-2.239807128911707.72967529296875-3.771484375,2.191650390625-3.771484375,3.8795166015625,0,2.416259765625,3.134033203119543,4.375,7,4.375,3.866027832029431,0,7-1.958740234375,7-4.375,0-1.6878662109375-1.531677246101026-3.14984130859375-3.771484375-3.8795166015625"})
        ]
      );
  }
});

module.exports = SwitchLeverCup;
module.exports.SwitchLeverCup = SwitchLeverCup;
module.exports.default = SwitchLeverCup;
