'use strict';

const { defineComponent, h } = require('vue');

const MicrophoneGrille = defineComponent({
  name: 'MicrophoneGrille',
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
          h('path', {"d":"M12.219 18L11.781 18C9.141 18 7 15.859 7 13.219L7 6.781C7 4.141 9.141 2 11.781 2L12.219 2C14.859 2 17 4.141 17 6.781L17 13.219C17 15.859 14.859 18 12.219 18Z"}),
          h('path', {"d":"M12 18L12 21"}),
          h('path', {"d":"M10 8L7 8"}),
          h('path', {"d":"M10 12L7 12"}),
          h('path', {"d":"M17 8L14 8"}),
          h('path', {"d":"M17 12L14 12"}),
          h('path', {"d":"M7 22L17 22"})
        ]
      );
  }
});

module.exports = MicrophoneGrille;
module.exports.MicrophoneGrille = MicrophoneGrille;
module.exports.default = MicrophoneGrille;
