'use strict';

const { defineComponent, h } = require('vue');

const DatabaseBolt = defineComponent({
  name: 'DatabaseBolt',
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
          h('path', {"d":"M2 7C2 4.789 5.582 3 10 3C14.418 3 18 4.789 18 7C18 9.211 14.418 11 10 11C5.582 11 2 9.211 2 7Z"}),
          h('path', {"d":"M18 7L18 12"}),
          h('path', {"d":"M2 17L2 7"}),
          h('path', {"d":"M14 15.465C12.824 15.805 11.457 16 10 16C5.582 16 2 14.211 2 12"}),
          h('path', {"d":"M14 20.465C12.824 20.805 11.457 21 10 21C5.582 21 2 19.211 2 17"}),
          h('path', {"d":"M22 13L18 17.5L22 17.5L18 22"})
        ]
      );
  }
});

module.exports = DatabaseBolt;
module.exports.DatabaseBolt = DatabaseBolt;
module.exports.default = DatabaseBolt;
