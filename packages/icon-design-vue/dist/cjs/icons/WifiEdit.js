'use strict';

const { defineComponent, h } = require('vue');

const WifiEdit = defineComponent({
  name: 'WifiEdit',
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
          h('path', {"d":"M2.387 7.777C5.195 6 8.387 5.078 11.594 5.004"}),
          h('path', {"d":"M5.59 11.852C6.656 11.176 7.809 10.688 8.996 10.379"}),
          h('path', {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926"}),
          h('path', {"d":"M21.414 2.586L21.586 2.758C22.367 3.539 22.367 4.805 21.586 5.586L15 12.172L12 12.172L12 9.172L18.586 2.586C19.367 1.805 20.633 1.805 21.414 2.586Z"}),
          h('path', {"d":"M17 4.172L20 7.172"}),
          h('path', {"d":"M12 20L12 20"})
        ]
      );
  }
});

module.exports = WifiEdit;
module.exports.WifiEdit = WifiEdit;
module.exports.default = WifiEdit;
