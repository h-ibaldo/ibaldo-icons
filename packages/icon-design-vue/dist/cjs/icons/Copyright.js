'use strict';

const { defineComponent, h } = require('vue');

const Copyright = defineComponent({
  name: 'Copyright',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M16 9.027C15.09 7.805 13.645 7 12 7C9.238 7 7 9.238 7 12C7 14.762 9.238 17 12 17C13.645 17 15.09 16.195 16 14.973"})
        ]
      );
  }
});

module.exports = Copyright;
module.exports.Copyright = Copyright;
module.exports.default = Copyright;
