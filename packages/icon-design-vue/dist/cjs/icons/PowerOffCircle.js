'use strict';

const { defineComponent, h } = require('vue');

const PowerOffCircle = defineComponent({
  name: 'PowerOffCircle',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M12 5L12 12"}),
          h('path', {"d":"M5 5L19 19"}),
          h('path', {"d":"M12.918 16.918C12.621 16.973 12.313 17 12 17C9.238 17 7 14.762 7 12C7 11.688 7.027 11.379 7.082 11.082"}),
          h('path', {"d":"M8.465 8.465C8.633 8.297 8.809 8.141 9 8"}),
          h('path', {"d":"M15 8C16.215 8.91 17 10.363 17 12C17 13.379 16.441 14.629 15.535 15.535"})
        ]
      );
  }
});

module.exports = PowerOffCircle;
module.exports.PowerOffCircle = PowerOffCircle;
module.exports.default = PowerOffCircle;
