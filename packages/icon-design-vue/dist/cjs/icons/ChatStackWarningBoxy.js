'use strict';

const { defineComponent, h } = require('vue');

const ChatStackWarningBoxy = defineComponent({
  name: 'ChatStackWarningBoxy',
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
          h('path', {"d":"M22 12L22 5C22 3.344 20.656 2 19 2L7 2"}),
          h('path', {"d":"M14.27 12.004L10.402 18.699C9.559 20.168 10.617 22 12.309 22L19.691 22C21.383 22 22.441 20.168 21.598 18.699L17.734 12.004C16.961 10.668 15.039 10.668 14.27 12.004Z"}),
          h('path', {"d":"M16 16L16 15"}),
          h('path', {"d":"M16 19L16 19"}),
          h('path', {"d":"M17.816 8C17.402 6.84 16.305 6 15 6L5 6C3.344 6 2 7.344 2 9L2 22L7 18"})
        ]
      );
  }
});

module.exports = ChatStackWarningBoxy;
module.exports.ChatStackWarningBoxy = ChatStackWarningBoxy;
module.exports.default = ChatStackWarningBoxy;
