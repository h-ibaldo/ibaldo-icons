'use strict';

const { defineComponent, h } = require('vue');

const ProgressBarSharp = defineComponent({
  name: 'ProgressBarSharp',
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
          h('rect', {"x":"1.974731449503452","y":"8.000000000480213","width":"20","height":"8"}),
          h('rect', {"x":"4.974731449503452","y":"11.000000000480213","width":"8","height":"2"})
        ]
      );
  }
});

module.exports = ProgressBarSharp;
module.exports.ProgressBarSharp = ProgressBarSharp;
module.exports.default = ProgressBarSharp;
