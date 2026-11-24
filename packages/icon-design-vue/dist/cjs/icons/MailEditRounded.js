'use strict';

const { defineComponent, h } = require('vue');

const MailEditRounded = defineComponent({
  name: 'MailEditRounded',
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
          h('path', {"d":"M9 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 8"}),
          h('path', {"d":"M6 6L11.359 10.465C11.73 10.777 12.27 10.777 12.641 10.465L18 6"}),
          h('path', {"d":"M21.379 11.621L21.375 11.621C20.547 10.793 19.207 10.793 18.379 11.621L11 19L11 22L14 22L21.379 14.621C22.207 13.793 22.207 12.449 21.379 11.621Z"}),
          h('path', {"d":"M16.879 13.121L19.879 16.121"})
        ]
      );
  }
});

module.exports = MailEditRounded;
module.exports.MailEditRounded = MailEditRounded;
module.exports.default = MailEditRounded;
