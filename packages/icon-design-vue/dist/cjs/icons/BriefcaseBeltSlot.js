'use strict';

const { defineComponent, h } = require('vue');

const BriefcaseBeltSlot = defineComponent({
  name: 'BriefcaseBeltSlot',
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
          h('rect', {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1"}),
          h('path', {"d":"M22,13.584770542298429c0,1.333894396830146-1.081335060860511,2.415229457699752-2.415229457699752,2.415229457699752H4.415229457699752c-1.333894396830146,0-2.415229457699752-1.081335060869606-2.415229457699752-2.415229457699752"}),
          h('path', {"d":"M9,2.999999999998181h6c.551915024494001,0,1,.448084975506,1,1v3h-8v-3c0-.551915024494.448084975505999-1,1-1Z"}),
          h('line', {"x1":"11","y1":"11.999999999998181","x2":"13","y2":"11.999999999998181"})
        ]
      );
  }
});

module.exports = BriefcaseBeltSlot;
module.exports.BriefcaseBeltSlot = BriefcaseBeltSlot;
module.exports.default = BriefcaseBeltSlot;
