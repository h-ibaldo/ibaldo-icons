'use strict';

const { defineComponent, h } = require('vue');

const FilterLinesWideCircle = defineComponent({
  name: 'FilterLinesWideCircle',
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
          h('circle', {"cx":"11.974731449501633","cy":"12.000000000479986","r":"10.000000000000341"}),
          h('line', {"x1":"6.974731449501633","y1":"8.000000000480213","x2":"16.974731449501633","y2":"8.000000000480213"}),
          h('line', {"x1":"7.974731449501633","y1":"12.000000000480213","x2":"15.974731449501633","y2":"12.000000000480213"}),
          h('line', {"x1":"8.974731449501633","y1":"16.000000000480213","x2":"14.974731449501633","y2":"16.000000000480213"})
        ]
      );
  }
});

module.exports = FilterLinesWideCircle;
module.exports.FilterLinesWideCircle = FilterLinesWideCircle;
module.exports.default = FilterLinesWideCircle;
