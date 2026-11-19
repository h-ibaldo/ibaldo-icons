'use strict';

const { defineComponent, h } = require('vue');

const CompassOctagon = defineComponent({
  name: 'CompassOctagon',
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
          h('path', {"d":"M6.828 3.172L3.172 6.828C2.422 7.578 2 8.598 2 9.656L2 14.344C2 15.402 2.422 16.422 3.172 17.172L6.828 20.828C7.578 21.578 8.598 22 9.656 22L14.344 22C15.402 22 16.422 21.578 17.172 20.828L20.828 17.172C21.578 16.422 22 15.402 22 14.344L22 9.656C22 8.598 21.578 7.578 20.828 6.828L17.172 3.172C16.422 2.422 15.402 2 14.344 2L9.656 2C8.598 2 7.578 2.422 6.828 3.172Z"}),
          h('path', {"d":"M16 8L10 10L8 16L14 14Z"})
        ]
      );
  }
});

module.exports = CompassOctagon;
module.exports.CompassOctagon = CompassOctagon;
module.exports.default = CompassOctagon;
