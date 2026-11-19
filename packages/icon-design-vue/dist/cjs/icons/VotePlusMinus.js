'use strict';

const { defineComponent, h } = require('vue');

const VotePlusMinus = defineComponent({
  name: 'VotePlusMinus',
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
          h('line', {"x1":"11.516630450973935","y1":"4.000000000480213","x2":"11.516630450973935","y2":"13.000000000476575"}),
          h('line', {"x1":"16.016630450973935","y1":"8.500000000476575","x2":"7.016630450973935","y2":"8.500000000476575"}),
          h('line', {"x1":"16.016630450973935","y1":"19.500000000476575","x2":"7.016630450973935","y2":"19.500000000476575"})
        ]
      );
  }
});

module.exports = VotePlusMinus;
module.exports.VotePlusMinus = VotePlusMinus;
module.exports.default = VotePlusMinus;
