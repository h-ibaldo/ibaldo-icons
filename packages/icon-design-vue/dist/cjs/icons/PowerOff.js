'use strict';

const { defineComponent, h } = require('vue');

const PowerOff = defineComponent({
  name: 'PowerOff',
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
          h('path', {"d":"M12 3L12 8"}),
          h('path', {"d":"M2 2L22 22"}),
          h('path', {"d":"M18 7.707C19.246 9.117 20 10.973 20 13C20 13.734 19.902 14.445 19.715 15.121"}),
          h('path', {"d":"M18.129 18.141C16.66 19.891 14.461 21 12 21C7.582 21 4 17.418 4 13C4 10.973 4.754 9.117 6 7.707"})
        ]
      );
  }
});

module.exports = PowerOff;
module.exports.PowerOff = PowerOff;
module.exports.default = PowerOff;
