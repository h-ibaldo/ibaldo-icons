'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownFromBar = defineComponent({
  name: 'ArrowDownFromBar',
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
          h('path', {"d":"M16 17L12 21L8 17"}),
          h('path', {"d":"M7 3L17 3"}),
          h('path', {"d":"M12 21L12 3"})
        ]
      );
  }
});

module.exports = ArrowDownFromBar;
module.exports.ArrowDownFromBar = ArrowDownFromBar;
module.exports.default = ArrowDownFromBar;
