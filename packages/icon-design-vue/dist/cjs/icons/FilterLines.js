'use strict';

const { defineComponent, h } = require('vue');

const FilterLines = defineComponent({
  name: 'FilterLines',
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
          h('line', {"x1":"1.974731449505271","y1":"5.000000000479304","x2":"21.974731449505271","y2":"5.000000000479304"}),
          h('line', {"x1":"4.974731449505271","y1":"10.000000000480213","x2":"18.974731449505271","y2":"10.000000000480213"}),
          h('line', {"x1":"7.974731449505271","y1":"15.000000000480213","x2":"15.974731449505271","y2":"15.000000000480213"}),
          h('line', {"x1":"10.974731449505271","y1":"20.000000000480213","x2":"12.974731449505271","y2":"20.000000000480213"})
        ]
      );
  }
});

module.exports = FilterLines;
module.exports.FilterLines = FilterLines;
module.exports.default = FilterLines;
