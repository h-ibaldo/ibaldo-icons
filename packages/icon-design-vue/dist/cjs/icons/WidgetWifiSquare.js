'use strict';

const { defineComponent, h } = require('vue');

const WidgetWifiSquare = defineComponent({
  name: 'WidgetWifiSquare',
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
          h('path', {"d":"M9 2L7 2C4.238 2 2 4.238 2 7L2 17C2 19.762 4.238 22 7 22L17 22C19.762 22 22 19.762 22 17L22 15"}),
          h('path', {"d":"M22 10C22 5.582 18.418 2 14 2"}),
          h('path', {"d":"M14 22L14 13C14 11.344 12.656 10 11 10L2 10"}),
          h('path', {"d":"M14 16L2 16"}),
          h('path', {"d":"M18 10C18 7.789 16.211 6 14 6"})
        ]
      );
  }
});

module.exports = WidgetWifiSquare;
module.exports.WidgetWifiSquare = WidgetWifiSquare;
module.exports.default = WidgetWifiSquare;
