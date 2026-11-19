'use strict';

const { defineComponent, h } = require('vue');

const DiagramTree = defineComponent({
  name: 'DiagramTree',
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
          h('rect', {"x":"2.016630450973025","y":"17.000000000480213","width":"4","height":"4"}),
          h('rect', {"x":"10.016630450973025","y":"17.000000000480213","width":"4","height":"4"}),
          h('rect', {"x":"10.016630450973025","y":"3.000000000480213","width":"4","height":"4"}),
          h('rect', {"x":"18.016630450973025","y":"17.000000000480213","width":"4","height":"4"}),
          h('polyline', {"points":"4.016630450971206 17.000000000480213 4.016630450971206 12.000000000480213 20.016630450971206 12.000000000480213 20.016630450971206 17.000000000480213"}),
          h('line', {"x1":"12.016630450971206","y1":"7.000000000480213","x2":"12.016630450971206","y2":"17.000000000480213"})
        ]
      );
  }
});

module.exports = DiagramTree;
module.exports.DiagramTree = DiagramTree;
module.exports.default = DiagramTree;
