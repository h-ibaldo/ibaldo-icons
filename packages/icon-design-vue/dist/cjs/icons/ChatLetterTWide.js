'use strict';

const { defineComponent, h } = require('vue');

const ChatLetterTWide = defineComponent({
  name: 'ChatLetterTWide',
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
          h('path', {"d":"M14.5 3L9.5 3C5.359 3 2 6.355 2 10.5C2 13.766 4.09 16.531 7 17.563L7 22L11.668 18L14.5 18C18.641 18 22 14.645 22 10.5C22 6.355 18.641 3 14.5 3Z"}),
          h('path', {"d":"M10.5 7L10.5 12C10.5 13.105 11.395 14 12.5 14L13.5 14"}),
          h('path', {"d":"M13.5 9L10.5 9"})
        ]
      );
  }
});

module.exports = ChatLetterTWide;
module.exports.ChatLetterTWide = ChatLetterTWide;
module.exports.default = ChatLetterTWide;
