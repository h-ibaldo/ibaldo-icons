'use strict';

const { defineComponent, h } = require('vue');

const VoteArrows = defineComponent({
  name: 'VoteArrows',
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
          h('line', {"x1":"12.016630450972116","y1":"2.000000000480213","x2":"12.016630450972116","y2":"9.000000000480213"}),
          h('polyline', {"points":"8.016630450972116 6.000000000480213 12.016630450972116 2.000000000480213 16.016630450972116 6.000000000480213"}),
          h('line', {"x1":"12.016630450972116","y1":"22.000000000480213","x2":"12.016630450972116","y2":"15.000000000480213"}),
          h('polyline', {"points":"16.016630450972116 18.000000000480213 12.016630450972116 22.000000000480213 8.016630450972116 18.000000000480213"})
        ]
      );
  }
});

module.exports = VoteArrows;
module.exports.VoteArrows = VoteArrows;
module.exports.default = VoteArrows;
