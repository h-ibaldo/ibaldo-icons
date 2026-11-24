'use strict';

const { defineComponent, h } = require('vue');

const BoxFrontPlus = defineComponent({
  name: 'BoxFrontPlus',
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
          h('path', {"d":"M21 22L3 22C2.449 22 2 21.551 2 21L2 7.352C2 7.125 2.078 6.902 2.219 6.727L5.699 2.375C5.891 2.137 6.176 2 6.48 2L17.52 2C17.824 2 18.109 2.137 18.301 2.375L21.781 6.727C21.922 6.902 22 7.125 22 7.352L22 21C22 21.551 21.551 22 21 22Z"}),
          h('path', {"d":"M2 8L22 8"}),
          h('path', {"d":"M12 2L12 8"}),
          h('path', {"d":"M9 15L15 15"}),
          h('path', {"d":"M12 12L12 18"})
        ]
      );
  }
});

module.exports = BoxFrontPlus;
module.exports.BoxFrontPlus = BoxFrontPlus;
module.exports.default = BoxFrontPlus;
