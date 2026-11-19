'use strict';

const { defineComponent, h } = require('vue');

const BriefcaseBeltClasps = defineComponent({
  name: 'BriefcaseBeltClasps',
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
          h('path', {"d":"M8,6.999999999998181v-3c0-.552284749830505.447715250169495-1,1-1h6c.552284749830505,0,1,.447715250169495,1,1v3"}),
          h('line', {"x1":"9","y1":"12.999999999998181","x2":"9","y2":"16.999999999998181"}),
          h('line', {"x1":"15","y1":"12.999999999998181","x2":"15","y2":"16.999999999998181"}),
          h('line', {"x1":"2","y1":"14.999999999998181","x2":"22","y2":"14.999999999998181"})
        ]
      );
  }
});

module.exports = BriefcaseBeltClasps;
module.exports.BriefcaseBeltClasps = BriefcaseBeltClasps;
module.exports.default = BriefcaseBeltClasps;
