'use strict';

const { defineComponent, h } = require('vue');

const ChatCheckCornerBroken = defineComponent({
  name: 'ChatCheckCornerBroken',
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
          h('path', {"d":"M16 4L17.5 6L22 2"}),
          h('path', {"d":"M12 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18"}),
          h('path', {"d":"M22 9L22 15C22 16.656 20.656 18 19 18L15 18L12 22"})
        ]
      );
  }
});

module.exports = ChatCheckCornerBroken;
module.exports.ChatCheckCornerBroken = ChatCheckCornerBroken;
module.exports.default = ChatCheckCornerBroken;
