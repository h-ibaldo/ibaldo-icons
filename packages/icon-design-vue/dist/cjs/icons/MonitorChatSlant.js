'use strict';

const { defineComponent, h } = require('vue');

const MonitorChatSlant = defineComponent({
  name: 'MonitorChatSlant',
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
          h('path', {"d":"M22 13L22 16C22 17.105 21.105 18 20 18L4 18C2.895 18 2 17.105 2 16L2 6.949C2 5.848 2.895 4.949 4 4.949L6 4.949"}),
          h('path', {"d":"M6 22L18 22"}),
          h('path', {"d":"M12 18L12 22"}),
          h('path', {"d":"M10 4L10 7C10 8.105 10.895 9 12 9L13 9L13 12L17 9L20 9C21.105 9 22 8.105 22 7L22 4C22 2.895 21.105 2 20 2L12 2C10.895 2 10 2.895 10 4Z"})
        ]
      );
  }
});

module.exports = MonitorChatSlant;
module.exports.MonitorChatSlant = MonitorChatSlant;
module.exports.default = MonitorChatSlant;
