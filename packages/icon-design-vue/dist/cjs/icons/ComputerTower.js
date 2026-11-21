'use strict';

const { defineComponent, h } = require('vue');

const ComputerTower = defineComponent({
  name: 'ComputerTower',
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
          h('path', {"d":"M6 2L18 2L18 22L6 22Z"}),
          h('path', {"d":"M9 6L15 6"}),
          h('path', {"d":"M9 9L15 9"}),
          h('path', {"d":"M9 12L15 12"}),
          h('path', {"d":"M12 17L12 18"})
        ]
      );
  }
});

module.exports = ComputerTower;
module.exports.ComputerTower = ComputerTower;
module.exports.default = ComputerTower;
