'use strict';

const { defineComponent, h } = require('vue');

const SpellCheck = defineComponent({
  name: 'SpellCheck',
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
          h('path', {"d":"M2 22L5.902 2.492C5.961 2.207 6.211 2 6.5 2C6.789 2 7.039 2.207 7.098 2.492L11 22"}),
          h('path', {"d":"M3.602 14L9.398 14"}),
          h('path', {"d":"M14 13L17 17L22 10"})
        ]
      );
  }
});

module.exports = SpellCheck;
module.exports.SpellCheck = SpellCheck;
module.exports.default = SpellCheck;
