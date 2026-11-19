'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownCircleDashedLong = defineComponent({
  name: 'ArrowDownCircleDashedLong',
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
          h('path', {"d":"M14 2.199C13.355 2.07 12.684 2 12 2C11.316 2 10.645 2.07 10 2.199"}),
          h('path', {"d":"M10 21.801C10.645 21.93 11.316 22 12 22C12.684 22 13.355 21.93 14 21.801"}),
          h('path', {"d":"M6.484 3.656C5.934 4.02 5.414 4.445 4.93 4.93C4.445 5.414 4.02 5.938 3.656 6.484"}),
          h('path', {"d":"M17.516 20.344C18.066 19.98 18.586 19.555 19.07 19.07C19.555 18.586 19.98 18.063 20.344 17.516"}),
          h('path', {"d":"M2.199 10C2.07 10.645 2 11.316 2 12C2 12.684 2.07 13.355 2.199 14"}),
          h('path', {"d":"M21.801 14C21.93 13.355 22 12.684 22 12C22 11.316 21.93 10.645 21.801 10"}),
          h('path', {"d":"M3.656 17.516C4.02 18.066 4.445 18.586 4.93 19.07C5.414 19.555 5.938 19.98 6.484 20.344"}),
          h('path', {"d":"M20.344 6.484C19.98 5.934 19.555 5.414 19.07 4.93C18.586 4.445 18.063 4.02 17.516 3.656"}),
          h('path', {"d":"M15 13L12 16L9 13"}),
          h('path', {"d":"M12 8L12 16"})
        ]
      );
  }
});

module.exports = ArrowDownCircleDashedLong;
module.exports.ArrowDownCircleDashedLong = ArrowDownCircleDashedLong;
module.exports.default = ArrowDownCircleDashedLong;
