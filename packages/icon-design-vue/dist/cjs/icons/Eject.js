'use strict';

const { defineComponent, h } = require('vue');

const Eject = defineComponent({
  name: 'Eject',
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
          h('path', {"d":"M19.082 16L4.918 16C3.68 16 2.938 14.629 3.609 13.59L10.691 2.707C11.309 1.766 12.691 1.766 13.309 2.707L20.391 13.59C21.063 14.629 20.32 16 19.082 16Z"}),
          h('path', {"d":"M20 22L4 22"})
        ]
      );
  }
});

module.exports = Eject;
module.exports.Eject = Eject;
module.exports.default = Eject;
