'use strict';

const { defineComponent, h } = require('vue');

const VoteArrowsHollow = defineComponent({
  name: 'VoteArrowsHollow',
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
          h('polygon', {"points":"17.016630450972116 7.000000000480213 12.016630450972116 2.000000000480213 7.016630450972116 7.000000000480213 10.016630450972116 7.000000000480213 10.016630450972116 10.000000000480213 14.016630450972116 10.000000000480213 14.016630450972116 7.000000000480213 17.016630450972116 7.000000000480213"}),
          h('polygon', {"points":"7.016630450972116 17.000000000480213 12.016630450972116 22.000000000480213 17.016630450972116 17.000000000480213 14.016630450972116 17.000000000480213 14.016630450972116 14.000000000480213 10.016630450972116 14.000000000480213 10.016630450972116 17.000000000480213 7.016630450972116 17.000000000480213"})
        ]
      );
  }
});

module.exports = VoteArrowsHollow;
module.exports.VoteArrowsHollow = VoteArrowsHollow;
module.exports.default = VoteArrowsHollow;
