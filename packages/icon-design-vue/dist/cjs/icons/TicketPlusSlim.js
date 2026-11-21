'use strict';

const { defineComponent, h } = require('vue');

const TicketPlusSlim = defineComponent({
  name: 'TicketPlusSlim',
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
          h('path', {"d":"M16 5L22 5"}),
          h('path', {"d":"M19 2L19 8"}),
          h('path', {"d":"M6.484 3.66L8.141 2L22 15.859L20.34 17.516C19.988 17.195 19.516 17 19 17C17.895 17 17 17.895 17 19C17 19.516 17.195 19.988 17.516 20.34L15.859 22L2 8.141L3.66 6.484C4.012 6.805 4.484 7 5 7C6.105 7 7 6.105 7 5C7 4.484 6.805 4.012 6.484 3.66Z"}),
          h('path', {"d":"M6 12L7 11"}),
          h('path', {"d":"M11 7L12 6"})
        ]
      );
  }
});

module.exports = TicketPlusSlim;
module.exports.TicketPlusSlim = TicketPlusSlim;
module.exports.default = TicketPlusSlim;
