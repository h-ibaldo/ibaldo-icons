'use strict';

const { defineComponent, h } = require('vue');

const PointerShine = defineComponent({
  name: 'PointerShine',
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
          h('path', {"d":"M11 2L11 4"}),
          h('path', {"d":"M2 11L4 11"}),
          h('path', {"d":"M4.637 4.637L6.051 6.051"}),
          h('path', {"d":"M4.637 17.363L6.051 15.949"}),
          h('path', {"d":"M15.949 6.051L17.363 4.637"}),
          h('path', {"d":"M10.316 10.949L13.863 21.582C14.004 22.004 14.582 22.047 14.781 21.648L17.07 17.07L21.648 14.781C22.047 14.582 22.004 14.004 21.582 13.859L10.949 10.316C10.559 10.184 10.184 10.559 10.316 10.949Z"})
        ]
      );
  }
});

module.exports = PointerShine;
module.exports.PointerShine = PointerShine;
module.exports.default = PointerShine;
