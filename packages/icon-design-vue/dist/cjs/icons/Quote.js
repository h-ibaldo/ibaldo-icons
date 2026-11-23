'use strict';

const { defineComponent, h } = require('vue');

const Quote = defineComponent({
  name: 'Quote',
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
          h('path', {"d":"M2 5L2 12C2 13.105 2.895 14 4 14L6 14L6 15.344C6 16.402 5.578 17.422 4.828 18.172L3 20L6 22L8.828 19.172C9.578 18.422 10 17.402 10 16.344L10 5C10 3.895 9.105 3 8 3L4 3C2.895 3 2 3.895 2 5Z"}),
          h('path', {"d":"M14 5L14 12C14 13.105 14.895 14 16 14L18 14L18 15.344C18 16.402 17.578 17.422 16.828 18.172L15 20L18 22L20.828 19.172C21.578 18.422 22 17.402 22 16.344L22 5C22 3.895 21.105 3 20 3L16 3C14.895 3 14 3.895 14 5Z"})
        ]
      );
  }
});

module.exports = Quote;
module.exports.Quote = Quote;
module.exports.default = Quote;
