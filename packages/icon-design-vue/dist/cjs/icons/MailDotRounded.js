'use strict';

const { defineComponent, h } = require('vue');

const MailDotRounded = defineComponent({
  name: 'MailDotRounded',
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
          h('path', {"d":"M15 19L4 19C2.895 19 2 18.105 2 17L2 7C2 5.895 2.895 5 4 5L20 5C21.105 5 22 5.895 22 7L22 12"}),
          h('path', {"d":"M6 9L11.359 13.465C11.73 13.777 12.27 13.777 12.641 13.465L18 9"}),
          h('path', {"d":"M18 17C18 15.895 18.895 15 20 15C21.105 15 22 15.895 22 17C22 18.105 21.105 19 20 19C18.895 19 18 18.105 18 17Z"})
        ]
      );
  }
});

module.exports = MailDotRounded;
module.exports.MailDotRounded = MailDotRounded;
module.exports.default = MailDotRounded;
