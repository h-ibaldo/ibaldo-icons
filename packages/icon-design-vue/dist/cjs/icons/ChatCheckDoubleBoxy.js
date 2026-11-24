'use strict';

const { defineComponent, h } = require('vue');

const ChatCheckDoubleBoxy = defineComponent({
  name: 'ChatCheckDoubleBoxy',
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
          h('path', {"d":"M2 5L2 22L7 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"}),
          h('path', {"d":"M7 9L8.5 11L13 7"}),
          h('path', {"d":"M11.801 12.066L12.5 13L17 9"})
        ]
      );
  }
});

module.exports = ChatCheckDoubleBoxy;
module.exports.ChatCheckDoubleBoxy = ChatCheckDoubleBoxy;
module.exports.default = ChatCheckDoubleBoxy;
