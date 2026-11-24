'use strict';

const { defineComponent, h } = require('vue');

const WindowModal = defineComponent({
  name: 'WindowModal',
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
          h('rect', {"x":"9","y":"12","width":"10","height":"7","rx":".853912563829908","ry":".853912563829908"})
        ]
      );
  }
});

module.exports = WindowModal;
module.exports.WindowModal = WindowModal;
module.exports.default = WindowModal;
