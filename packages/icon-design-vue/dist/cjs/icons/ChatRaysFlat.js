'use strict';

const { defineComponent, h } = require('vue');

const ChatRaysFlat = defineComponent({
  name: 'ChatRaysFlat',
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
          h('path', {"d":"M13 2L13 4"}),
          h('path', {"d":"M5 2L7 4"}),
          h('path', {"d":"M21 2L19 4"}),
          h('path', {"d":"M13 22L13 20"}),
          h('path', {"d":"M21 22L19 20"}),
          h('path', {"d":"M5 22L7 20"}),
          h('path', {"d":"M20 16C21.105 16 22 15.105 22 14L22 10C22 8.895 21.105 8 20 8L7 8C5.895 8 5 8.895 5 10L5 12L2 16Z"})
        ]
      );
  }
});

module.exports = ChatRaysFlat;
module.exports.ChatRaysFlat = ChatRaysFlat;
module.exports.default = ChatRaysFlat;
