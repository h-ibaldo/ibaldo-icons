'use strict';

const { defineComponent, h } = require('vue');

const MailClockRounded = defineComponent({
  name: 'MailClockRounded',
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
          h('path', {"d":"M9 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 11"}),
          h('path', {"d":"M6 6L11.359 10.465C11.73 10.777 12.27 10.777 12.641 10.465L18 6"}),
          h('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z"}),
          h('path', {"d":"M17 15L17 17L19 18"})
        ]
      );
  }
});

module.exports = MailClockRounded;
module.exports.MailClockRounded = MailClockRounded;
module.exports.default = MailClockRounded;
