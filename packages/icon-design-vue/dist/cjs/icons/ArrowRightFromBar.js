'use strict';

const { defineComponent, h } = require('vue');

const ArrowRightFromBar = defineComponent({
  name: 'ArrowRightFromBar',
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
          h('path', {"d":"M17 8L21 12L17 16"}),
          h('path', {"d":"M3 17L3 7"}),
          h('path', {"d":"M21 12L3 12"})
        ]
      );
  }
});

module.exports = ArrowRightFromBar;
module.exports.ArrowRightFromBar = ArrowRightFromBar;
module.exports.default = ArrowRightFromBar;
