'use strict';

const { defineComponent, h } = require('vue');

const WindowModalTitled = defineComponent({
  name: 'WindowModalTitled',
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
          h('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"2","y1":"8","x2":"22","y2":"8"}),
          h('line', {"x1":"5.010000000000218","y1":"5","x2":"5","y2":"5"}),
          h('line', {"x1":"8.010000000000218","y1":"5","x2":"8","y2":"5"}),
          h('line', {"x1":"11.010000000000218","y1":"5","x2":"11","y2":"5"}),
          h('rect', {"x":"8","y":"12","width":"11","height":"7","rx":".895591052500095","ry":".895591052500095"}),
          h('line', {"x1":"8","y1":"14","x2":"19","y2":"14"})
        ]
      );
  }
});

module.exports = WindowModalTitled;
module.exports.WindowModalTitled = WindowModalTitled;
module.exports.default = WindowModalTitled;
