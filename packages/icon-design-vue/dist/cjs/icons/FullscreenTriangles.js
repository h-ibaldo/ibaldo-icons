'use strict';

const { defineComponent, h } = require('vue');

const FullscreenTriangles = defineComponent({
  name: 'FullscreenTriangles',
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
          h('polygon', {"points":"9.974731417511066 1.998779298535737 1.974731417511066 1.998779298535737 1.974731417511066 9.998779298535737 9.974731417511066 1.998779298535737"}),
          h('polygon', {"points":"13.97473488191099 21.998778259117898 21.974731417813018 21.998778259117898 21.974731417813018 13.998781723219508 13.97473488191099 21.998778259117898"})
        ]
      );
  }
});

module.exports = FullscreenTriangles;
module.exports.FullscreenTriangles = FullscreenTriangles;
module.exports.default = FullscreenTriangles;
