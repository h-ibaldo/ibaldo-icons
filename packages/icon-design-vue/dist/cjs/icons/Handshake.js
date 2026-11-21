'use strict';

const { defineComponent, h } = require('vue');

const Handshake = defineComponent({
  name: 'Handshake',
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
          h('path', {"d":"M9 12.758L7 15C6.449 15.551 5.551 15.551 5 15C4.449 14.449 4.449 13.551 5 13L10 7.758L11.5 9.258C12.328 10.086 13.672 10.086 14.5 9.258C15.328 8.43 15.328 7.086 14.5 6.258L12.121 3.879C10.949 2.707 9.051 2.707 7.879 3.879L3.879 7.879C3.316 8.441 3 9.203 3 10L3 10.758"}),
          h('path', {"d":"M9 12.758L7 15C6.449 15.551 6.449 16.449 7 17C7.551 17.551 8.449 17.551 9 17L11 14.758"}),
          h('path', {"d":"M11 14.758L9 17C8.449 17.551 8.449 18.449 9 19C9.551 19.551 10.449 19.551 11 19L13 16.758"}),
          h('path', {"d":"M13 5C14.105 3.895 15.895 3.895 17 5L20.141 8.141C21.715 9.715 21.699 12.27 20.109 13.828L13 21C12.449 21.551 11.551 21.551 11 21C10.449 20.449 10.449 19.551 11 19L13 16.758"})
        ]
      );
  }
});

module.exports = Handshake;
module.exports.Handshake = Handshake;
module.exports.default = Handshake;
