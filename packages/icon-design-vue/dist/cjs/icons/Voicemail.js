'use strict';

const { defineComponent, h } = require('vue');

const Voicemail = defineComponent({
  name: 'Voicemail',
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
          h('path', {"d":"M2 12C2 9.789 3.789 8 6 8C8.211 8 10 9.789 10 12C10 14.211 8.211 16 6 16C3.789 16 2 14.211 2 12Z"}),
          h('path', {"d":"M14 12C14 9.789 15.789 8 18 8C20.211 8 22 9.789 22 12C22 14.211 20.211 16 18 16C15.789 16 14 14.211 14 12Z"}),
          h('path', {"d":"M6 16L18 16"})
        ]
      );
  }
});

module.exports = Voicemail;
module.exports.Voicemail = Voicemail;
module.exports.default = Voicemail;
