'use strict';

const { defineComponent, h } = require('vue');

const Check = defineComponent({
  name: 'Check',
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
          h('polyline', {"points":"4.974731440080177 12.000000003874447 9.974731440080177 17.000000003874447 18.974731440080177 7.000000003874447"})
        ]
      );
  }
});

module.exports = Check;
module.exports.Check = Check;
module.exports.default = Check;
