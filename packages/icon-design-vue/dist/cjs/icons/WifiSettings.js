'use strict';

const { defineComponent, h } = require('vue');

const WifiSettings = defineComponent({
  name: 'WifiSettings',
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
          h('path', {"d":"M2.387 7.777C4.855 6.215 7.621 5.313 10.43 5.066"}),
          h('path', {"d":"M5.59 11.852C7.035 10.938 8.633 10.363 10.27 10.125"}),
          h('path', {"d":"M8.797 15.926C10.746 14.691 13.254 14.691 15.203 15.926"}),
          h('path', {"d":"M20.5 7C20.5 8.934 18.934 10.5 17 10.5C15.066 10.5 13.5 8.934 13.5 7C13.5 5.066 15.066 3.5 17 3.5C18.934 3.5 20.5 5.066 20.5 7Z"}),
          h('path', {"d":"M17 7.012L17 7"}),
          h('path', {"d":"M17 2L17 3.5"}),
          h('path', {"d":"M17 10.5L17 12"}),
          h('path', {"d":"M22 7L20.5 7"}),
          h('path', {"d":"M13.5 7L12 7"}),
          h('path', {"d":"M20.535 10.535L19.477 9.477"}),
          h('path', {"d":"M14.523 4.523L13.465 3.465"}),
          h('path', {"d":"M13.465 10.535L14.523 9.477"}),
          h('path', {"d":"M19.477 4.523L20.535 3.465"}),
          h('path', {"d":"M12 20L12 20"})
        ]
      );
  }
});

module.exports = WifiSettings;
module.exports.WifiSettings = WifiSettings;
module.exports.default = WifiSettings;
