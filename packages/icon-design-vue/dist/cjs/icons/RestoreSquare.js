'use strict';

const { defineComponent, h } = require('vue');

const RestoreSquare = defineComponent({
  name: 'RestoreSquare',
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
          h('rect', {"x":"9.94946288292158","y":"5.998779299507078","width":"8","height":"8","rx":"1","ry":"1"}),
          h('path', {"d":"M13.94946288292158,16.998779299507078c0,.552284749828686-.447715250169495,1-1,1h-6c-.552284749830505,0-1-.447715250171314-1-1v-6c0-.552284749832324.447715250169495-1,1-1"}),
          h('rect', {"x":"1.94946288292158","y":"1.998779299507078","width":"20","height":"20","rx":"3","ry":"3"})
        ]
      );
  }
});

module.exports = RestoreSquare;
module.exports.RestoreSquare = RestoreSquare;
module.exports.default = RestoreSquare;
