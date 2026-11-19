'use strict';

const { defineComponent, h } = require('vue');

const CloudCode = defineComponent({
  name: 'CloudCode',
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
          h('path', {"d":"M13 15L11 21"}),
          h('path', {"d":"M16 16L18 18L16 20"}),
          h('path', {"d":"M8 16L6 18L8 20"}),
          h('path', {"d":"M20.977 16C21.609 15.16 22 14.133 22 13C22 10.555 20.242 8.527 17.922 8.094C17.488 5.211 15.004 3 12 3C8.996 3 6.512 5.211 6.078 8.094C3.758 8.527 2 10.555 2 13C2 14.133 2.391 15.16 3.023 16"})
        ]
      );
  }
});

module.exports = CloudCode;
module.exports.CloudCode = CloudCode;
module.exports.default = CloudCode;
