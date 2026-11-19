'use strict';

const { defineComponent, h } = require('vue');

const InfoBlock = defineComponent({
  name: 'InfoBlock',
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
          h('circle', {"cx":"12.025268553439673","cy":"4.99999656424734","r":"3"}),
          h('rect', {"x":"10.025268553439673","y":"11.99999656424734","width":"4","height":"10"})
        ]
      );
  }
});

module.exports = InfoBlock;
module.exports.InfoBlock = InfoBlock;
module.exports.default = InfoBlock;
