'use strict';

const { defineComponent, h } = require('vue');

const GaugeTrioCircle = defineComponent({
  name: 'GaugeTrioCircle',
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
          h('path', {"d":"M7.051 6.051L5.637 4.637"}),
          h('path', {"d":"M12 5L12 3"}),
          h('path', {"d":"M18 14L18 18"}),
          h('path', {"d":"M16 7L12 11"}),
          h('path', {"d":"M11 11C11 10.445 11.445 10 12 10C12.555 10 13 10.445 13 11C13 11.555 12.555 12 12 12C11.445 12 11 11.555 11 11Z"}),
          h('path', {"d":"M22 18C22 15.789 20.211 14 18 14C15.789 14 14 15.789 14 18C14 20.211 15.789 22 18 22C20.211 22 22 20.211 22 18Z"}),
          h('path', {"d":"M8.828 15.172L6 18"}),
          h('path', {"d":"M10 18C10 15.789 8.211 14 6 14C3.789 14 2 15.789 2 18C2 20.211 3.789 22 6 22C8.211 22 10 20.211 10 18Z"}),
          h('path', {"d":"M20.941 10C20.445 5.5 16.633 2 12 2C7.367 2 3.555 5.5 3.059 10"})
        ]
      );
  }
});

module.exports = GaugeTrioCircle;
module.exports.GaugeTrioCircle = GaugeTrioCircle;
module.exports.default = GaugeTrioCircle;
