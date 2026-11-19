'use strict';

const { defineComponent, h } = require('vue');

const ListDollarDash = defineComponent({
  name: 'ListDollarDash',
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
          h('path', {"d":"M8 4L14 4"}),
          h('path', {"d":"M8 9L14 9"}),
          h('path', {"d":"M3 4L4 4"}),
          h('path', {"d":"M3 9L4 9"}),
          h('path', {"d":"M8 14L14 14"}),
          h('path', {"d":"M3 14L4 14"}),
          h('path', {"d":"M21.621 10C20.793 9.172 19.449 9.172 18.621 10C17.793 10.828 17.793 12.172 18.621 13L21.121 15.5C21.949 16.328 21.949 17.672 21.121 18.5C20.293 19.328 18.949 19.328 18.121 18.5"}),
          h('path', {"d":"M20 8L20 9.379"}),
          h('path', {"d":"M20 19.121L20 21"})
        ]
      );
  }
});

module.exports = ListDollarDash;
module.exports.ListDollarDash = ListDollarDash;
module.exports.default = ListDollarDash;
