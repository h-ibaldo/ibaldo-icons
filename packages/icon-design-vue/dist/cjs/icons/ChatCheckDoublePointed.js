'use strict';

const { defineComponent, h } = require('vue');

const ChatCheckDoublePointed = defineComponent({
  name: 'ChatCheckDoublePointed',
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
          h('path', {"d":"M17.68 17.52L10 22L10 17L9 17C5.133 17 2 13.867 2 10C2 6.133 5.133 3 9 3L15 3C18.867 3 22 6.133 22 10C22 13.094 20.355 15.957 17.68 17.52Z"}),
          h('path', {"d":"M7 9L8.5 11L13 7"}),
          h('path', {"d":"M11.801 12.066L12.5 13L17 9"})
        ]
      );
  }
});

module.exports = ChatCheckDoublePointed;
module.exports.ChatCheckDoublePointed = ChatCheckDoublePointed;
module.exports.default = ChatCheckDoublePointed;
