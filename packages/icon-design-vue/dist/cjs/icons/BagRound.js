'use strict';

const { defineComponent, h } = require('vue');

const BagRound = defineComponent({
  name: 'BagRound',
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
          h('path', {"d":"M3.160238702228526,7.839765294598692h17.679522595542949c.640353171759344,0,1.160238702228526.519885530469182,1.160238702228526,1.160238702228526v8c0,2.75957512247-2.24042487753,5-5,5H7c-2.75957512247,0-5-2.24042487753-5-5v-8c0-.640353171759344.519885530469182-1.160238702228526,1.160238702228526-1.160238702228526Z"}),
          h('path', {"d":"M16,11.000003996827218v-5.000003999997716c0-2.209136790192133-1.790859209819246-3.999996000002284-3.999996000000465-3.999996000002284h-.00000799999907c-2.209136790190314,0-3.999996000000465,1.790859209810151-3.999996000000465,3.999996000002284v5.000003999997716"})
        ]
      );
  }
});

module.exports = BagRound;
module.exports.BagRound = BagRound;
module.exports.default = BagRound;
