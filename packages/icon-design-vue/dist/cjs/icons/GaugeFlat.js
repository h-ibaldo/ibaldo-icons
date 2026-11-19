'use strict';

const { defineComponent, h } = require('vue');

const GaugeFlat = defineComponent({
  name: 'GaugeFlat',
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
          h('path', {"d":"M13.926 13.539C14.223 12.477 13.602 11.371 12.535 11.074C11.473 10.777 10.371 11.402 10.074 12.465C9.777 13.527 10.398 14.633 11.461 14.93C12.527 15.227 13.629 14.602 13.926 13.539Z"}),
          h('path', {"d":"M16.617 7.895L13.336 11.523"}),
          h('path', {"d":"M6.012 21L17.984 21C19.695 19.723 21.016 17.898 21.633 15.688C23.113 10.363 20.004 4.852 14.684 3.367C9.363 1.887 3.852 5 2.367 10.316C1.23 14.406 2.809 18.602 6.012 21Z"})
        ]
      );
  }
});

module.exports = GaugeFlat;
module.exports.GaugeFlat = GaugeFlat;
module.exports.default = GaugeFlat;
