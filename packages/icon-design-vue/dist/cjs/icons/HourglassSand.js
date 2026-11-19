'use strict';

const { defineComponent, h } = require('vue');

const HourglassSand = defineComponent({
  name: 'HourglassSand',
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
          h('path', {"d":"M16.922 7.898L12 12L7.078 7.898C6.395 7.328 6 6.484 6 5.594L6 2L18 2L18 5.594C18 6.484 17.605 7.328 16.922 7.898Z"}),
          h('path', {"d":"M7.078 16.102L12 12L16.922 16.102C17.605 16.672 18 17.516 18 18.406L18 22L6 22L6 18.406C6 17.516 6.395 16.672 7.078 16.102Z"}),
          h('path', {"d":"M10 19L14 19"})
        ]
      );
  }
});

module.exports = HourglassSand;
module.exports.HourglassSand = HourglassSand;
module.exports.default = HourglassSand;
