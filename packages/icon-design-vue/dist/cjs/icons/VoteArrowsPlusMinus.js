'use strict';

const { defineComponent, h } = require('vue');

const VoteArrowsPlusMinus = defineComponent({
  name: 'VoteArrowsPlusMinus',
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
          h('line', {"x1":"18.016630450973935","y1":"3.000000000480213","x2":"18.016630450973935","y2":"11.000000000480213"}),
          h('line', {"x1":"5.016630450973935","y1":"2.000000000480213","x2":"5.016630450973935","y2":"9.000000000480213"}),
          h('line', {"x1":"22.016630450973935","y1":"7.000000000480213","x2":"14.016630450973935","y2":"7.000000000480213"}),
          h('line', {"x1":"22.016630450973935","y1":"19.000000000480213","x2":"14.016630450973935","y2":"19.000000000480213"}),
          h('polyline', {"points":"2.016630450973935 5.000000000480213 5.016630450973935 2.000000000480213 8.016630450973935 5.000000000480213"}),
          h('line', {"x1":"5.016630450973935","y1":"22.000000000480213","x2":"5.016630450973935","y2":"15.000000000480213"}),
          h('polyline', {"points":"8.016630450973935 19.000000000480213 5.016630450973935 22.000000000480213 2.016630450973935 19.000000000480213"})
        ]
      );
  }
});

module.exports = VoteArrowsPlusMinus;
module.exports.VoteArrowsPlusMinus = VoteArrowsPlusMinus;
module.exports.default = VoteArrowsPlusMinus;
