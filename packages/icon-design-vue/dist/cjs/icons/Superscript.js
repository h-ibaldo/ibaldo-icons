'use strict';

const { defineComponent, h } = require('vue');

const Superscript = defineComponent({
  name: 'Superscript',
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
          h('path', {"d":"M2 7L12 22"}),
          h('path', {"d":"M12 7L2 22"}),
          h('path', {"d":"M16 4.027C16 2.906 16.906 2 18.027 2L18.973 2C20.094 2 21 2.906 21 4.027C21 4.641 20.719 5.223 20.238 5.609L17.563 7.75C16.574 8.539 16 9.734 16 11L21 11"})
        ]
      );
  }
});

module.exports = Superscript;
module.exports.Superscript = Superscript;
module.exports.default = Superscript;
