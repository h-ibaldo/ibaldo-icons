'use strict';

const { defineComponent, h } = require('vue');

const ChatStackWarningFacing = defineComponent({
  name: 'ChatStackWarningFacing',
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
          h('path', {"d":"M10 2L4 2C2.895 2 2 2.895 2 4L2 18L7 14"}),
          h('path', {"d":"M8 17C8 18.105 8.895 19 10 19L17 19L22 22L22 16"}),
          h('path', {"d":"M13.77 3L9.73 9.996C8.961 11.332 9.922 12.996 11.461 12.996L19.191 12.996C20.883 12.996 21.941 11.164 21.098 9.699L17.234 3C16.461 1.664 14.539 1.664 13.77 3Z"}),
          h('path', {"d":"M15.5 6.996L15.5 5.996"}),
          h('path', {"d":"M15.5 9.996L15.5 9.996"})
        ]
      );
  }
});

module.exports = ChatStackWarningFacing;
module.exports.ChatStackWarningFacing = ChatStackWarningFacing;
module.exports.default = ChatStackWarningFacing;
