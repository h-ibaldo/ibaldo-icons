'use strict';

const { defineComponent, h } = require('vue');

const ChatStackHashSlant = defineComponent({
  name: 'ChatStackHashSlant',
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
          h('path', {"d":"M2 9L2 16C2 17.656 3.344 19 5 19L7 19L7 22L12 19L15 19C16.656 19 18 17.656 18 16L18 9C18 7.344 16.656 6 15 6L5 6C3.344 6 2 7.344 2 9Z"}),
          h('path', {"d":"M22 14L22 5C22 3.344 20.656 2 19 2L7 2"}),
          h('path', {"d":"M9 9L7 16"}),
          h('path', {"d":"M13 9L11 16"}),
          h('path', {"d":"M7 11L14 11"}),
          h('path', {"d":"M6 14L13 14"})
        ]
      );
  }
});

module.exports = ChatStackHashSlant;
module.exports.ChatStackHashSlant = ChatStackHashSlant;
module.exports.default = ChatStackHashSlant;
