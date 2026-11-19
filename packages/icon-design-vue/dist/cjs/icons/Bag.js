'use strict';

const { defineComponent, h } = require('vue');

const Bag = defineComponent({
  name: 'Bag',
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
          h('rect', {"x":"2.999999981009751","y":"7.953620571095598","width":"18","height":"14","rx":"1.100699078559046","ry":"1.100699078559046"}),
          h('path', {"d":"M15.999999981009751,11.953620571095598v-6c0-2.209136790177581-1.790859209819246-3.999995999998646-3.999996000000465-3.999995999998646h-.00000799999907c-2.209136790190314,0-3.999996000000465,1.790859209821065-3.999996000000465,3.999995999998646v6"})
        ]
      );
  }
});

module.exports = Bag;
module.exports.Bag = Bag;
module.exports.default = Bag;
