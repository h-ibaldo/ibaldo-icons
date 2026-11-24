'use strict';

const { defineComponent, h } = require('vue');

const GaugeThreeQuarter = defineComponent({
  name: 'GaugeThreeQuarter',
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
          h('path', {"d":"M12 3L12 6"}),
          h('path', {"d":"M22 13L19 13"}),
          h('path', {"d":"M5 13L2 13"}),
          h('path', {"d":"M7 18L5 20"}),
          h('path', {"d":"M7 8L5 6"}),
          h('path', {"d":"M22 13C22 7.477 17.523 3 12 3C6.477 3 2 7.477 2 13C2 15.777 3.137 18.293 4.965 20.105L5 20"}),
          h('path', {"d":"M13.926 13.535C14.223 12.473 13.602 11.367 12.535 11.074C11.473 10.777 10.371 11.398 10.074 12.465C9.777 13.527 10.398 14.629 11.465 14.926C12.527 15.223 13.629 14.602 13.926 13.535Z"}),
          h('path', {"d":"M16.617 7.895L13.336 11.523"})
        ]
      );
  }
});

module.exports = GaugeThreeQuarter;
module.exports.GaugeThreeQuarter = GaugeThreeQuarter;
module.exports.default = GaugeThreeQuarter;
