'use strict';

const { defineComponent, h } = require('vue');

const MailCheck = defineComponent({
  name: 'MailCheck',
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
          h('path', {"d":"M14 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5L21 5C21.551 5 22 5.449 22 6L22 12"}),
          h('path', {"d":"M2.332 5.266L11.375 12.5C11.742 12.793 12.258 12.793 12.625 12.5L21.668 5.266"}),
          h('path', {"d":"M22 15L18 19L16 17"})
        ]
      );
  }
});

module.exports = MailCheck;
module.exports.MailCheck = MailCheck;
module.exports.default = MailCheck;
