'use strict';

const { defineComponent, h } = require('vue');

const ChatSearchSlant = defineComponent({
  name: 'ChatSearchSlant',
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
          h('path', {"d":"M15.02 9.5C15.02 11.434 13.449 13 11.52 13C9.582 13 8.02 11.434 8.02 9.5C8.02 7.566 9.582 6 11.52 6C13.449 6 15.02 7.566 15.02 9.5Z"}),
          h('path', {"d":"M13.992 11.973L16.016 14"})
        ]
      );
  }
});

module.exports = ChatSearchSlant;
module.exports.ChatSearchSlant = ChatSearchSlant;
module.exports.default = ChatSearchSlant;
