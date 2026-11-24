'use strict';

const { defineComponent, h } = require('vue');

const ToggleOffInset = defineComponent({
  name: 'ToggleOffInset',
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
          h('rect', {"x":"2.000000211455358","y":"4.99999675957163","width":"19.999999999963393","height":"14.000000020118108","rx":"6.999993018822535","ry":"6.999993018822535"}),
          h('circle', {"cx":"8.999999977098923","cy":"11.999996563434252","r":"3"})
        ]
      );
  }
});

module.exports = ToggleOffInset;
module.exports.ToggleOffInset = ToggleOffInset;
module.exports.default = ToggleOffInset;
