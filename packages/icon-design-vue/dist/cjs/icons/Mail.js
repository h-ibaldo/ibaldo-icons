'use strict';

const { defineComponent, h } = require('vue');

const Mail = defineComponent({
  name: 'Mail',
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
          h('rect', {"x":"2.000000000224645","y":"5.032754075946286","width":"20","height":"14","rx":"1","ry":"1"}),
          h('path', {"d":"M2.619750976787145,5.590493333755148l8.711282688577739,7.840188429130649c.380305456468705.342276395560475.957627213248998.342276395560475,1.337932669717702,0l8.711282688579558-7.840188429130649"})
        ]
      );
  }
});

module.exports = Mail;
module.exports.Mail = Mail;
module.exports.default = Mail;
