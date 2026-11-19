'use strict';

const { defineComponent, h } = require('vue');

const ChatSunBroken = defineComponent({
  name: 'ChatSunBroken',
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
          h('path', {"d":"M10 2L5 2C3.344 2 2 3.344 2 5L2 15C2 16.656 3.344 18 5 18L9 18"}),
          h('path', {"d":"M22 15C22 16.656 20.656 18 19 18L15 18L12 22"}),
          h('path', {"d":"M17 12C14.789 12 13 10.211 13 8C13 5.789 14.789 4 17 4C19.211 4 21 5.789 21 8C21 10.211 19.211 12 17 12Z"}),
          h('path', {"d":"M17 2L17 4"}),
          h('path', {"d":"M17 12L17 14"}),
          h('path', {"d":"M22.195 5L20.465 6"}),
          h('path', {"d":"M13.535 10L11.805 11"}),
          h('path', {"d":"M22.195 11L20.465 10"}),
          h('path', {"d":"M13.535 6L11.805 5"})
        ]
      );
  }
});

module.exports = ChatSunBroken;
module.exports.ChatSunBroken = ChatSunBroken;
module.exports.default = ChatSunBroken;
