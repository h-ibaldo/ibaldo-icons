'use strict';

const { defineComponent, h } = require('vue');

const ChatStackTriangleBoxy = defineComponent({
  name: 'ChatStackTriangleBoxy',
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
          h('path', {"d":"M13.648 22L20.352 22C21.516 22 22.238 20.73 21.637 19.73L18.285 14.145C17.703 13.172 16.297 13.172 15.715 14.145L12.363 19.73C11.762 20.73 12.484 22 13.648 22Z"}),
          h('path', {"d":"M9 18L7 18L2 22L2 9C2 7.344 3.344 6 5 6L15 6C16.656 6 18 7.344 18 9L18 10"}),
          h('path', {"d":"M22 13L22 5C22 3.344 20.656 2 19 2L8 2"})
        ]
      );
  }
});

module.exports = ChatStackTriangleBoxy;
module.exports.ChatStackTriangleBoxy = ChatStackTriangleBoxy;
module.exports.default = ChatStackTriangleBoxy;
