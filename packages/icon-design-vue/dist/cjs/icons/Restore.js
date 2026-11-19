'use strict';

const { defineComponent, h } = require('vue');

const Restore = defineComponent({
  name: 'Restore',
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
          h('path', {"d":"M14.949462887261689,18.998779299481612v2.000000000003638c0,.552284749828686-.447715250169495,1-1,1H2.949462887261689c-.552284749830505,0-1-.447715250171314-1-1v-11c0-.552284749832324.447715250169495-1,1-1h2"}),
          h('rect', {"x":"8.949462887261689","y":"1.99877929948525","width":"13","height":"13","rx":"1","ry":"1"})
        ]
      );
  }
});

module.exports = Restore;
module.exports.Restore = Restore;
module.exports.default = Restore;
