'use strict';

const { defineComponent, h } = require('vue');

const MobileVolume = defineComponent({
  name: 'MobileVolume',
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
          h('path', {"d":"M3 18L15 18"}),
          h('path', {"d":"M3 6L15 6"}),
          h('path', {"d":"M15 9.922L13 9.922C12.449 9.922 12 10.367 12 10.922L12 12.922C12 13.473 12.449 13.922 13 13.922L15 13.922L18.375 16.621C19.031 17.145 20 16.68 20 15.84L20 8C20 7.164 19.031 6.695 18.375 7.223Z"}),
          h('path', {"d":"M21 11L21 13"}),
          h('path', {"d":"M15 18L15 20C15 21.105 14.105 22 13 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13 2C14.105 2 15 2.895 15 4L15 6"})
        ]
      );
  }
});

module.exports = MobileVolume;
module.exports.MobileVolume = MobileVolume;
module.exports.default = MobileVolume;
