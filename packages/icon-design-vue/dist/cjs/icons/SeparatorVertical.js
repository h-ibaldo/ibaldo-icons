'use strict';

const { defineComponent, h } = require('vue');

const SeparatorVertical = defineComponent({
  name: 'SeparatorVertical',
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
          h('path', {"d":"M12 22L12 2"}),
          h('path', {"d":"M17 17L22 11.684L17 6.363"}),
          h('path', {"d":"M6.859 6.363L2 11.684L6.859 17"})
        ]
      );
  }
});

module.exports = SeparatorVertical;
module.exports.SeparatorVertical = SeparatorVertical;
module.exports.default = SeparatorVertical;
