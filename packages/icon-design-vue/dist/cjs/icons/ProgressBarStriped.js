'use strict';

const { defineComponent, h } = require('vue');

const ProgressBarStriped = defineComponent({
  name: 'ProgressBarStriped',
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
          h('rect', {"x":"1.974731449501633","y":"8.000000000480213","width":"20","height":"8","rx":"2","ry":"2"}),
          h('line', {"x1":"2.974731449501633","y1":"15.000000000480213","x2":"9.974731449501633","y2":"8.000000000480213"}),
          h('line', {"x1":"1.974731449501633","y1":"12.000000000480213","x2":"5.974731449501633","y2":"8.000000000480213"}),
          h('line', {"x1":"5.974731449501633","y1":"16.000000000480213","x2":"13.974731449501633","y2":"8.000000000480213"}),
          h('line', {"x1":"9.974731449501633","y1":"16.000000000480213","x2":"13.974731449501633","y2":"12.000000000480213"}),
          h('line', {"x1":"13.974731449501633","y1":"8.000000000480213","x2":"13.974731449501633","y2":"16.000000000480213"})
        ]
      );
  }
});

module.exports = ProgressBarStriped;
module.exports.ProgressBarStriped = ProgressBarStriped;
module.exports.default = ProgressBarStriped;
