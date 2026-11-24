'use strict';

const { defineComponent, h } = require('vue');

const CheckboxCheckDashed = defineComponent({
  name: 'CheckboxCheckDashed',
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
          h('path', {"d":"M6 9L8 11L12 7"}),
          h('path', {"d":"M14 16L4 16C2.895 16 2 15.105 2 14L2 4C2 2.895 2.895 2 4 2L14 2C15.105 2 16 2.895 16 4L16 14C16 15.105 15.105 16 14 16Z"}),
          h('path', {"d":"M22 20L22 21C22 21.551 21.551 22 21 22L20 22"}),
          h('path', {"d":"M20 8L21 8C21.551 8 22 8.449 22 9L22 10"}),
          h('path', {"d":"M22 14L22 16"}),
          h('path', {"d":"M10 22L9 22C8.449 22 8 21.551 8 21L8 20"}),
          h('path', {"d":"M16 22L14 22"})
        ]
      );
  }
});

module.exports = CheckboxCheckDashed;
module.exports.CheckboxCheckDashed = CheckboxCheckDashed;
module.exports.default = CheckboxCheckDashed;
