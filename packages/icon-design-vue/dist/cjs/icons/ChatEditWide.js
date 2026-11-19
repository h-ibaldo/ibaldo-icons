'use strict';

const { defineComponent, h } = require('vue');

const ChatEditWide = defineComponent({
  name: 'ChatEditWide',
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
          h('path', {"d":"M21.414 3.414L21.586 3.586C22.367 4.367 22.367 5.633 21.586 6.414L15 13L12 13L12 10L18.586 3.414C19.367 2.633 20.633 2.633 21.414 3.414Z"}),
          h('path', {"d":"M17 5L20 8"}),
          h('path', {"d":"M12 4L9 4C5.133 4 2 7.133 2 11C2 14.172 4.109 16.848 7 17.707L7 22L11.57 18L15 18C18.523 18 21.434 15.391 21.922 12"})
        ]
      );
  }
});

module.exports = ChatEditWide;
module.exports.ChatEditWide = ChatEditWide;
module.exports.default = ChatEditWide;
