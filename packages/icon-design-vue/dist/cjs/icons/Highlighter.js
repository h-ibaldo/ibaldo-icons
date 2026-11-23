'use strict';

const { defineComponent, h } = require('vue');

const Highlighter = defineComponent({
  name: 'Highlighter',
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
          h('path', {"d":"M2 22L8 22L10 20L7 17Z"}),
          h('path', {"d":"M8 22L21 22"}),
          h('path', {"d":"M22 14L19.414 16.586C18.633 17.367 17.367 17.367 16.586 16.586L10.414 10.414C9.633 9.633 9.633 8.367 10.414 7.586L16 2"}),
          h('path', {"d":"M17.145 17.145L12 18L10 20L7 17L9 15L9.855 9.855"})
        ]
      );
  }
});

module.exports = Highlighter;
module.exports.Highlighter = Highlighter;
module.exports.default = Highlighter;
