'use strict';

const { defineComponent, h } = require('vue');

const ArrowRepeatCompact = defineComponent({
  name: 'ArrowRepeatCompact',
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
          h('polyline', {"points":"14.9999999995498 2 17.999999999689862 4.999999999869033 14.999999999829924 8"}),
          h('path', {"d":"M4.000000000040018,13.000000000498403l-.000000000040018-1c-.000000000170076-3.865993248818995,3.134006750879962-7.000000000138243,6.999999999689862-7.000000000320142l7-.000000000309228"}),
          h('polyline', {"points":"9.0000000004502 22.00000000026921 6.000000000310138 19.000000000409273 9.00000000018008 16.00000000026921"}),
          h('path', {"d":"M19.999999999949978,10.999999999778083l.000000000050022,1c.000000000170076,3.865993248820814-3.134006750859953,7.000000000141881-6.999999999689862,7.000000000311047l-7,.000000000320142"})
        ]
      );
  }
});

module.exports = ArrowRepeatCompact;
module.exports.ArrowRepeatCompact = ArrowRepeatCompact;
module.exports.default = ArrowRepeatCompact;
