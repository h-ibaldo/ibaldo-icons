'use strict';

const { defineComponent, h } = require('vue');

const FileChartBarPlain = defineComponent({
  name: 'FileChartBarPlain',
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
          h('path', {"d":"M8 18.034L8 11.034"}),
          h('path', {"d":"M12 18.034L12 14.034"}),
          h('path', {"d":"M16 18.034L16 16.034"}),
          h('path', {"d":"M18 22.034L6 22.034C4.895 22.034 4 21.138 4 20.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034Z"})
        ]
      );
  }
});

module.exports = FileChartBarPlain;
module.exports.FileChartBarPlain = FileChartBarPlain;
module.exports.default = FileChartBarPlain;
