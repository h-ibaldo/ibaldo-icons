'use strict';

const { defineComponent, h } = require('vue');

const Subscript = defineComponent({
  name: 'Subscript',
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
          h('path', {"d":"M2 2L12 17"}),
          h('path', {"d":"M12 2L2 17"}),
          h('path', {"d":"M16 15.027C16 13.906 16.906 13 18.027 13L18.973 13C20.094 13 21 13.906 21 15.027C21 15.641 20.719 16.223 20.238 16.609L17.563 18.75C16.574 19.539 16 20.734 16 22L21 22"})
        ]
      );
  }
});

module.exports = Subscript;
module.exports.Subscript = Subscript;
module.exports.default = Subscript;
