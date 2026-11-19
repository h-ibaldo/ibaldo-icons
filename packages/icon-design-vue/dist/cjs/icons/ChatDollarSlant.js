'use strict';

const { defineComponent, h } = require('vue');

const ChatDollarSlant = defineComponent({
  name: 'ChatDollarSlant',
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
          h('path', {"d":"M14 6.5L13.449 6.316C12.82 6.105 12.16 6 11.5 6C10.395 6 9.5 6.895 9.5 8C9.5 9.105 10.395 10 11.5 10L12.5 10C13.605 10 14.5 10.895 14.5 12C14.5 13.105 13.605 14 12.5 14C11.84 14 11.18 13.895 10.551 13.684L10 13.5"}),
          h('path', {"d":"M12 5L12 6"}),
          h('path', {"d":"M12 14L12 15"}),
          h('path', {"d":"M2 5L2 15C2 16.656 3.344 18 5 18L8 18L8 22L14 18L19 18C20.656 18 22 16.656 22 15L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"})
        ]
      );
  }
});

module.exports = ChatDollarSlant;
module.exports.ChatDollarSlant = ChatDollarSlant;
module.exports.default = ChatDollarSlant;
