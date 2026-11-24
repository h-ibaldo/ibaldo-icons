'use strict';

const { defineComponent, h } = require('vue');

const WidgetDotsCircle = defineComponent({
  name: 'WidgetDotsCircle',
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
          h('path', {"d":"M11 11L11 11"}),
          h('path', {"d":"M14 11L14 11"}),
          h('path', {"d":"M17 11L17 11"}),
          h('path', {"d":"M21.164 8L10 8C8.895 8 8 8.895 8 10L8 21.16"}),
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M21.801 14L8 14L8 21.16"})
        ]
      );
  }
});

module.exports = WidgetDotsCircle;
module.exports.WidgetDotsCircle = WidgetDotsCircle;
module.exports.default = WidgetDotsCircle;
