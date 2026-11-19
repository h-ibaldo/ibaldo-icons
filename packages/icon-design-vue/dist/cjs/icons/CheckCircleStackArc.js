'use strict';

const { defineComponent, h } = require('vue');

const CheckCircleStackArc = defineComponent({
  name: 'CheckCircleStackArc',
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
          h('path', {"d":"M17 9.5C17 13.641 13.645 17 9.5 17C5.355 17 2 13.641 2 9.5C2 5.359 5.355 2 9.5 2C13.645 2 17 5.359 17 9.5Z"}),
          h('path', {"d":"M6.5 9.5L8.5 11.5L12.5 7.5"}),
          h('path', {"d":"M20.484 10C21.434 11.254 22 12.809 22 14.5C22 18.641 18.641 22 14.5 22C12.809 22 11.254 21.434 10 20.488"})
        ]
      );
  }
});

module.exports = CheckCircleStackArc;
module.exports.CheckCircleStackArc = CheckCircleStackArc;
module.exports.default = CheckCircleStackArc;
