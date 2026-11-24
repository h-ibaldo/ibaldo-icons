'use strict';

const { defineComponent, h } = require('vue');

const ArrowConvergeLeftCircle = defineComponent({
  name: 'ArrowConvergeLeftCircle',
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
          h('path', {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z"}),
          h('path', {"d":"M14 6L12 8L14 10"}),
          h('path', {"d":"M8 10L10 12L8 14"}),
          h('path', {"d":"M14 14L12 16L14 18"}),
          h('path', {"d":"M5 12L10 12"}),
          h('path', {"d":"M12 8L17 8"}),
          h('path', {"d":"M12 16L17 16"})
        ]
      );
  }
});

module.exports = ArrowConvergeLeftCircle;
module.exports.ArrowConvergeLeftCircle = ArrowConvergeLeftCircle;
module.exports.default = ArrowConvergeLeftCircle;
