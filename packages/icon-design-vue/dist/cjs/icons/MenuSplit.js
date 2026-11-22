'use strict';

const { defineComponent, h } = require('vue');

const MenuSplit = defineComponent({
  name: 'MenuSplit',
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
          h('path', {"d":"M2 4L22 4"}),
          h('path', {"d":"M2 12L11 12"}),
          h('path', {"d":"M16 12L22 12"}),
          h('path', {"d":"M16 12L22 12"}),
          h('path', {"d":"M2 20L22 20"})
        ]
      );
  }
});

module.exports = MenuSplit;
module.exports.MenuSplit = MenuSplit;
module.exports.default = MenuSplit;
