'use strict';

const { defineComponent, h } = require('vue');

const Contactless = defineComponent({
  name: 'Contactless',
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
          h('path', {"d":"M5 10.023C6.148 11.172 6.148 13.035 5 14.184"}),
          h('path', {"d":"M7.945 7.383C10.551 9.988 10.551 14.219 7.945 16.824"}),
          h('path', {"d":"M10.887 4.59C15.035 8.738 15.035 15.469 10.887 19.617"}),
          h('path', {"d":"M15 2.848C20.113 7.961 20.113 16.246 15 21.359"})
        ]
      );
  }
});

module.exports = Contactless;
module.exports.Contactless = Contactless;
module.exports.default = Contactless;
