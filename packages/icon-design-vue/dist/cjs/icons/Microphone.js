'use strict';

const { defineComponent, h } = require('vue');

const Microphone = defineComponent({
  name: 'Microphone',
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
          h('path', {"d":"M12 14C9.789 14 8 12.211 8 10L8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6L16 10C16 12.211 14.211 14 12 14Z"}),
          h('path', {"d":"M12 18L12 22"}),
          h('path', {"d":"M16 22L8 22"}),
          h('path', {"d":"M5.773 15C7.234 16.828 9.477 18 12 18C14.523 18 16.766 16.828 18.227 15"})
        ]
      );
  }
});

module.exports = Microphone;
module.exports.Microphone = Microphone;
module.exports.default = Microphone;
