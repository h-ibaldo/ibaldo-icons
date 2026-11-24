'use strict';

const { defineComponent, h } = require('vue');

const MicrophoneBare = defineComponent({
  name: 'MicrophoneBare',
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
          h('path', {"d":"M12 15C9.789 15 8 13.211 8 11L8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6L16 11C16 13.211 14.211 15 12 15Z"}),
          h('path', {"d":"M12 19L12 22"}),
          h('path', {"d":"M5.094 15C6.473 17.387 9.043 19 12 19C14.957 19 17.527 17.387 18.906 15"})
        ]
      );
  }
});

module.exports = MicrophoneBare;
module.exports.MicrophoneBare = MicrophoneBare;
module.exports.default = MicrophoneBare;
