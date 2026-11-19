'use strict';

const { defineComponent, h } = require('vue');

const GaugeXThreeQuarter = defineComponent({
  name: 'GaugeXThreeQuarter',
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
          h('path', {"d":"M12 2L12 5"}),
          h('path', {"d":"M22 12L19 12"}),
          h('path', {"d":"M5 12L2 12"}),
          h('path', {"d":"M7 17L5 19"}),
          h('path', {"d":"M7 7L5 5"}),
          h('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 14.777 3.137 17.293 4.965 19.105L5 19"}),
          h('path', {"d":"M13.926 12.535C14.223 11.473 13.602 10.367 12.535 10.074C11.473 9.777 10.371 10.398 10.074 11.465C9.777 12.527 10.398 13.629 11.465 13.926C12.527 14.223 13.629 13.602 13.926 12.535Z"}),
          h('path', {"d":"M16.617 6.895L13.336 10.523"}),
          h('path', {"d":"M16 22L20 18"}),
          h('path', {"d":"M20 22L16 18"})
        ]
      );
  }
});

module.exports = GaugeXThreeQuarter;
module.exports.GaugeXThreeQuarter = GaugeXThreeQuarter;
module.exports.default = GaugeXThreeQuarter;
