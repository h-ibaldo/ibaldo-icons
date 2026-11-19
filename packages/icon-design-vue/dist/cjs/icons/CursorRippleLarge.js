'use strict';

const { defineComponent, h } = require('vue');

const CursorRippleLarge = defineComponent({
  name: 'CursorRippleLarge',
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
          h('path', {"d":"M18.934 22L14.699 17.766L13.367 20.461C13.082 21.035 12.25 20.98 12.039 20.379L8.043 8.965C7.844 8.391 8.391 7.844 8.965 8.043L20.379 12.035C20.98 12.25 21.035 13.082 20.461 13.367L17.766 14.699L22 18.934Z"}),
          h('path', {"d":"M15.316 6C14.191 3.637 11.793 2 9 2C5.133 2 2 5.133 2 9C2 11.789 3.637 14.191 6 15.316"})
        ]
      );
  }
});

module.exports = CursorRippleLarge;
module.exports.CursorRippleLarge = CursorRippleLarge;
module.exports.default = CursorRippleLarge;
