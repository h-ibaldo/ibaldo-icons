'use strict';

const { defineComponent, h } = require('vue');

const ChatHappySlant = defineComponent({
  name: 'ChatHappySlant',
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
          h('path', {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"}),
          h('path', {"d":"M10 7L10 8"}),
          h('path', {"d":"M14 7L14 8"}),
          h('path', {"d":"M7 10.652C8.191 12.086 9.988 13 12 13C14.012 13 15.809 12.086 17 10.652"})
        ]
      );
  }
});

module.exports = ChatHappySlant;
module.exports.ChatHappySlant = ChatHappySlant;
module.exports.default = ChatHappySlant;
