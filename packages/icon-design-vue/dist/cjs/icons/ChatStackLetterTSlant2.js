'use strict';

const { defineComponent, h } = require('vue');

const ChatStackLetterTSlant2 = defineComponent({
  name: 'ChatStackLetterTSlant2',
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
          h('path', {"d":"M3 9L3 15C3 16.656 4.344 18 6 18L9 18L9 22L15 18L18 18C19.656 18 21 16.656 21 15L21 9C21 7.344 19.656 6 18 6L6 6C4.344 6 3 7.344 3 9Z"}),
          h('path', {"d":"M10.5 9L10.5 13C10.5 14.105 11.395 15 12.5 15L13.5 15"}),
          h('path', {"d":"M13.5 11L10.5 11"}),
          h('path', {"d":"M6 2L18 2"})
        ]
      );
  }
});

module.exports = ChatStackLetterTSlant2;
module.exports.ChatStackLetterTSlant2 = ChatStackLetterTSlant2;
module.exports.default = ChatStackLetterTSlant2;
