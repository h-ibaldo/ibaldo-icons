'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownLeftSquare = defineComponent({
  name: 'ArrowDownLeftSquare',
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
          h('rect', {"x":"2.025268567788771","y":"1.998782735923669","width":"20","height":"20","rx":"1.999999999990905","ry":"1.999999999990905"}),
          h('polyline', {"points":"14.025268566489103 14.998782735836357 9.025268566489103 14.998782736058274 9.025268566269006 9.998782736058274"}),
          h('line', {"x1":"15.025268566218074","y1":"8.998782735789064","x2":"9.025268566489103","y2":"14.998782736058274"})
        ]
      );
  }
});

module.exports = ArrowDownLeftSquare;
module.exports.ArrowDownLeftSquare = ArrowDownLeftSquare;
module.exports.default = ArrowDownLeftSquare;
